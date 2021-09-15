export default function FileInput({ event }) {
  return (
    <>
      <input
        type="file"
        id="uploadProfile"
        onChange={(e) => event(e.target)}
        accept="image/png, image/jpeg, image/jpg"
        name="imgSrc"
      />
      <input
        type="file"
        id="uploadMusic"
        onChange={(e) => event(e.target)}
        accept="audio/*"
        name="musicSrc"
      />
    </>
  );
}
