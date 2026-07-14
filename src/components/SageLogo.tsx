export default function SageLogo({
  className = "h-10 w-auto",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "color";
}) {
  const isColor = variant === "color";
  const textColor = isColor ? "#2D5A3F" : "white";
  const subTextOpacity = isColor ? "0.55" : "0.6";

  return (
    <svg
      viewBox="0 0 200 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Turns the colored swan into a clean white silhouette on dark backgrounds */}
        <filter id="sageWhiten">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 1 0"
          />
        </filter>
      </defs>

      {/* Real Sage swan mark (actual brand asset) */}
      <image
        href="/sage-icon.png"
        x="0"
        y="2.5"
        width="50"
        height="50"
        preserveAspectRatio="xMidYMid meet"
        filter={isColor ? undefined : "url(#sageWhiten)"}
      />

      <text
        x="58"
        y="33"
        fontFamily="Arial, sans-serif"
        fontSize="23"
        fontWeight="700"
        letterSpacing="5"
        fill={textColor}
      >
        SAGE
      </text>
      <text
        x="58"
        y="47"
        fontFamily="Arial, sans-serif"
        fontSize="8.5"
        fontWeight="500"
        letterSpacing="3"
        fill={textColor}
        opacity={subTextOpacity}
      >
        BY GPD
      </text>
    </svg>
  );
}
