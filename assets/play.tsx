export default function PlayIcon({ size,callback,color="white" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size * 9) / 7}
      onClick={callback}
      viewBox="0 0 77.592 98.754"
      id="play-button"
    >
      <path
        id="Icon_material-play-arrow play-button"
        data-name="Icon material-play-arrow"
        d="M12,7.5v98.754L89.592,56.877Z"
        transform="translate(-12 -7.5)"
        fill={color}
      />
    </svg>
  );
}
