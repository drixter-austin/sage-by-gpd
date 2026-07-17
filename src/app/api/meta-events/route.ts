import { NextRequest } from "next/server";

const PIXEL_ID = process.env.META_PIXEL_ID!;
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN!;
const TEST_EVENT_CODE = process.env.META_TEST_EVENT_CODE;
const API_VERSION = "v21.0";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { event_name, event_id, event_source_url, user_data, custom_data } =
    body;

  if (!event_name || !event_id) {
    return Response.json(
      { error: "event_name and event_id are required" },
      { status: 400 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? undefined;
  const ua = request.headers.get("user-agent") ?? undefined;

  const cookies = request.headers.get("cookie") ?? "";
  const fbp = cookies.match(/(?:^|;\s*)_fbp=([^;]*)/)?.[1];
  const fbc = cookies.match(/(?:^|;\s*)_fbc=([^;]*)/)?.[1];

  const payload: Record<string, unknown> = {
    data: [
      {
        event_name,
        event_time: Math.floor(Date.now() / 1000),
        event_id,
        event_source_url,
        action_source: "website",
        user_data: {
          client_ip_address: ip,
          client_user_agent: ua,
          ...(fbp ? { fbp } : {}),
          ...(fbc ? { fbc } : {}),
          ...user_data,
        },
        ...(custom_data ? { custom_data } : {}),
      },
    ],
    access_token: ACCESS_TOKEN,
  };

  if (TEST_EVENT_CODE) {
    payload.test_event_code = TEST_EVENT_CODE;
  }

  const res = await fetch(
    `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
  );

  const result = await res.json();

  if (!res.ok) {
    return Response.json({ error: result }, { status: res.status });
  }

  return Response.json({
    success: true,
    events_received: result.events_received,
  });
}
