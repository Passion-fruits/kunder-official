export default function FileInput({ event }) {
  return (
    <input
      type="file"
      id="profileImgInput"
      onChange={(e) => event(e.target)}
      accept="image/png, image/jpeg, image/jpg"
      name="coverSrc"
      style={{display:"none"}}
    />
  );
}
