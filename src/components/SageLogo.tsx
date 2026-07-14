export default function SageLogo({
  className = "h-10 w-auto",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "color";
}) {
  const isColor = variant === "color";
  const darkGreen = isColor ? "#2D5A3F" : "#ffffff";
  const lightGreen = isColor ? "#5A8F6E" : "rgba(255,255,255,0.55)";
  const textColor = isColor ? "#2D5A3F" : "white";
  const subTextOpacity = isColor ? "0.5" : "0.6";

  return (
    <svg
      viewBox="0 0 200 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Swan S-logo icon */}
      <g transform="translate(1, 2) scale(0.5)">
        {/* Dark green: upper portion with swan neck at top-right */}
        <path
          d="M16 70 C4 54, 4 24, 18 12 C32 0, 56 -2, 68 6 C74 2, 82 -2, 88 4 C96 12, 88 26, 78 32 C60 48, 38 60, 16 70Z"
          fill={darkGreen}
        />
        {/* Light green: lower portion with leaf tip at bottom-left */}
        <path
          d="M84 30 C96 46, 96 76, 82 88 C68 100, 44 102, 32 94 C26 98, 18 102, 12 96 C4 88, 12 74, 22 68 C40 52, 62 40, 84 30Z"
          fill={lightGreen}
        />
      </g>
      <text
        x="55"
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
        x="55"
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
