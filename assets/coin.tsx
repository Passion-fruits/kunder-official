import { COLOR } from "./../styles/index";
export default function CoinIcon({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(size * 18) / 23}
      height={size}
      viewBox="0 0 18 23"
    >
      <g id="그룹_655" data-name="그룹 655" transform="translate(-1602 -328)">
        <g id="그룹_654" data-name="그룹 654" transform="translate(1602 328)">
          <g id="그룹_656" data-name="그룹 656" transform="translate(4.184)">
            <text
              id="K"
              transform="translate(-0.184 18)"
              fill={COLOR.green_main}
              fontSize="21"
              fontFamily="NanumSquareB, NanumSquare"
            >
              <tspan x="0" y="0">
                K
              </tspan>
            </text>
          </g>
          <rect
            id="사각형_487"
            data-name="사각형 487"
            width="17"
            height="2"
            transform="translate(0 7)"
          />
          <rect
            id="사각형_488"
            data-name="사각형 488"
            width="17"
            height="2"
            transform="translate(0 11)"
          />
        </g>
      </g>
    </svg>
  );
}
