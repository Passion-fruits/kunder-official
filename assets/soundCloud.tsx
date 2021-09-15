import { COLOR } from './../styles/index';
import { isEmpty } from './../lib/util/isEmpty';
export default function SoundCloudIcon({url,callback}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28.328"
      height="12.393"
      viewBox="0 0 28.328 12.393"
      onClick={() => callback(url)}
      style={!isEmpty(url) ? {} : { pointerEvents: "none" }}
    >
      <path
        id="Icon_metro-soundcloud"
        data-name="Icon metro-soundcloud"
        d="M27.246,16.941a3.773,3.773,0,0,0-1.413.273,6.35,6.35,0,0,0-6.418-5.645,6.739,6.739,0,0,0-2.333.419c-.276.1-.348.208-.348.413V23.541a.426.426,0,0,0,.391.415l10.122.006a3.513,3.513,0,1,0,0-7.021ZM13.636,23.961h.885l.443-6.2-.443-6.191h-.885l-.443,6.191Zm-2.656,0H10.1l-.443-4.5.443-4.35h.885l.443,4.426Zm-4.426,0H7.44l.443-3.541L7.44,16.88H6.554l-.443,3.541Zm-3.541-1.77H3.9l.443-1.77L3.9,18.65H3.013l-.443,1.77Z"
        transform="translate(-2.571 -11.568)"
        fill={isEmpty(url) ? COLOR.iconNone : "#ff9100"}
        style={url ? {} : { pointerEvents: "none" }}
      />
    </svg>
  );
}
