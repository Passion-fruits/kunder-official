import { COLOR } from "../styles";

export default function HeartIcon({
  size,
  callback,
  color = "#fff",
  isLike = false,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 26) / 22}
      viewBox="0 0 26.039 22.967"
      onClick={callback}
    >
      <g
        id="그룹_28"
        data-name="그룹 28"
        transform="translate(-1564.962 -1021.949)"
      >
        <path
          id="Icon_feather-heart"
          data-name="Icon feather-heart"
          d="M24.508,6.351a6.325,6.325,0,0,0-8.947,0L14.342,7.57,13.123,6.351A6.326,6.326,0,1,0,4.176,15.3L5.4,16.517l8.947,8.947,8.947-8.947L24.508,15.3a6.325,6.325,0,0,0,0-8.947Z"
          transform="translate(1563.639 1018.451)"
          style={{ transition: "0.5s" }}
          fill={isLike ? COLOR.main : "#fff"}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
