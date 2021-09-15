export default function VolumeIcon({ callback, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24.271 22.514"
      onClick={callback}
      width={(size * 24) / 22}
      height={size}
    >
      <g
        id="Icon_feather-volume-1"
        data-name="Icon feather-volume-1"
        transform="translate(-2.25 -6.75)"
      >
        <path
          id="패스_12"
          data-name="패스 12"
          d="M16.509,7.5,9,13.5H3V22.51H9l7.5,6Z"
          transform="translate(0)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          id="패스_13"
          data-name="패스 13"
          d="M23.31,12.69a7.5,7.5,0,0,1,0,10.612"
          transform="translate(0.013 0.003)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
