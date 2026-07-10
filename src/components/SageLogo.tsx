export default function SageLogo({ className = "h-10 w-auto", variant = "light" }: { className?: string; variant?: "light" | "color" }) {
  const isColor = variant === "color";
  const frontColor = isColor ? "#7BB58A" : "white";
  const backColor = isColor ? "#4A7B56" : "rgba(255,255,255,0.55)";
  const textColor = isColor ? "#1B3A2D" : "white";
  const subTextOpacity = isColor ? "0.5" : "0.6";

  return (
    <svg
      viewBox="0 0 200 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Swan icon — traced from original Figma assets */}
      <g transform="translate(2,55) scale(0.0087,-0.00866)" fill="none" stroke="none">
        {/* Back shape (darker green S-curve) */}
        <path
          d="M1226 6335 c-731 -104 -1256 -731 -1223 -1459 19 -436 214 -789 625 -1133 262 -220 460 -343 1091 -677 631 -335 878 -501 1139 -768 332 -338 456 -647 456 -1128 0 -383 -93 -747 -275 -1085 l-43 -79 60 34 c849 480 1303 1103 1306 1790 1 459 -145 757 -481 982 -219 146 -436 231 -1056 413 -974 286 -1426 531 -1793 970 -261 312 -387 614 -399 960 -12 375 108 554 367 543 181 -7 283 -94 558 -473 266 -368 388 -462 680 -526 26 -6 220 -14 432 -19 408 -9 492 -17 770 -74 227 -48 617 -154 824 -226 33 -11 61 -20 63 -20 10 0 -83 168 -144 260 -371 561 -1017 1132 -1631 1442 -453 228 -940 328 -1326 273z"
          fill={backColor}
        />
        {/* Front shape (lighter green S-curve) */}
        <path
          d="M1280 6298 c-823 -483 -1250 -1059 -1277 -1718 -17 -410 113 -749 364 -952 234 -189 464 -289 1093 -474 657 -193 935 -298 1206 -454 674 -388 1063 -946 1068 -1530 3 -352 -114 -516 -364 -514 -177 1 -290 95 -560 468 -252 348 -383 459 -611 517 -75 19 -125 22 -454 29 -442 10 -583 25 -940 105 -151 34 -460 120 -628 175 -71 23 -131 39 -134 36 -8 -8 71 -149 152 -271 231 -347 610 -740 996 -1032 857 -650 1745 -846 2391 -528 792 390 1030 1418 489 2115 -264 340 -593 577 -1391 1000 -657 348 -895 506 -1150 760 -332 331 -465 636 -477 1096 -11 397 75 766 262 1122 30 56 53 102 52 101 -1 0 -40 -23 -87 -51z"
          fill={frontColor}
        />
      </g>
      <text
        x="52"
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
        x="52"
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
