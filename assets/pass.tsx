export default function PassIcon({ callback, isNext }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13.088"
      height="22.437"
      viewBox="0 0 13.088 22.437"
      onClick={callback}
      style={isNext ? { transform: "rotate(180deg)" } : {}}
    >
      <path
        id="Icon_metro-next"
        data-name="Icon metro-next"
        d="M13.088,0V22.437H9.349V12.154L0,21.5V.935l9.349,9.349V0Z"
        transform="translate(13.088 22.437) rotate(180)"
        fill="#fff"
      />
    </svg>
  );
}
