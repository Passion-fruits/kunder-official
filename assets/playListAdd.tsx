export default function PlayListAddIcon({
  size,
  color = "white",
  callback = () => {},
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={(size * 6) / 4}
      height={size}
      viewBox="0 0 23.494 16.446"
      onClick={callback}
    >
      <path
        id="Icon_material-playlist-add"
        data-name="Icon material-playlist-add"
        d="M17.1,13.7H3v2.349H17.1Zm0-4.7H3v2.349H17.1Zm4.7,9.4V13.7H19.446v4.7h-4.7v2.349h4.7v4.7H21.8v-4.7h4.7V18.4ZM3,20.747h9.4V18.4H3Z"
        transform="translate(-3 -9)"
        fill={color}
      />
    </svg>
  );
}
