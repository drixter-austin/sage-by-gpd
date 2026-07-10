export default function SageLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized S icon */}
      <g>
        <path
          d="M22 5C14 5 8 11 8 18c0 5 3 8 8 10 4 2 6 3 6 6 0 3-2 5-6 5s-7-2-8-5l-4 3c2 4 7 7 12 7 8 0 14-5 14-12 0-6-4-9-9-11-4-2-5-3-5-5 0-3 2-5 6-5 3 0 5 1 7 4l3-3C30 8 26 5 22 5z"
          fill="#C5964C"
        />
      </g>
      {/* SAGE text */}
      <text
        x="44"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="4"
        fill="white"
      >
        SAGE
      </text>
      {/* BY GPD subtitle */}
      <text
        x="44"
        y="48"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="500"
        letterSpacing="2"
        fill="white"
        opacity="0.7"
      >
        BY GPD
      </text>
    </svg>
  );
}
