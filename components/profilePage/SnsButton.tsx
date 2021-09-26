export default function SnsButton({ snsLogo, snsName, snsLink }) {
  const openSnsLink = () => {
    window.open(snsLink);
  };
  return (
    <button
      style={snsLink ? {} : { pointerEvents: "none", opacity: "0.5" }}
      onClick={openSnsLink}
    >
      {snsLogo}
      {snsName}
    </button>
  );
}
