export default function MuteIcon({ callback, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(size * 3) / 2.5}
      height={size}
      onClick={callback}
      viewBox="0 0 29.414 23"
    >
      <g
        id="Icon_feather-volume-x"
        data-name="Icon feather-volume-x"
        transform="translate(-2 -6.5)"
      >
        <path
          id="패스_31"
          data-name="패스 31"
          d="M16.5,7.5,9,13.5H3v9H9l7.5,6Z"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="패스_32"
          data-name="패스 32"
          d="M34.5,13.5l-9,9"
          transform="translate(-4.5)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          id="패스_33"
          data-name="패스 33"
          d="M25.5,13.5l9,9"
          transform="translate(-4.5)"
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
