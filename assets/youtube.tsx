import { COLOR } from "./../styles/index";
import { isEmpty } from './../lib/util/isEmpty';
export default function YoutubeIcon({ url, callback }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.75"
      height="19.512"
      viewBox="0 0 27.75 19.512"
      onClick={() => callback(url)}
      style={!isEmpty(url) ? {} : { pointerEvents: "none" }}
    >
      <path
        id="Icon_awesome-youtube"
        data-name="Icon awesome-youtube"
        d="M28.22,7.553a3.487,3.487,0,0,0-2.453-2.469C23.6,4.5,14.925,4.5,14.925,4.5s-8.678,0-10.842.584A3.487,3.487,0,0,0,1.63,7.553a36.578,36.578,0,0,0-.58,6.723A36.578,36.578,0,0,0,1.63,21a3.435,3.435,0,0,0,2.453,2.43c2.164.584,10.842.584,10.842.584s8.678,0,10.842-.584A3.435,3.435,0,0,0,28.22,21a36.578,36.578,0,0,0,.58-6.723,36.578,36.578,0,0,0-.58-6.723ZM12.087,18.4V10.15l7.253,4.126L12.087,18.4Z"
        transform="translate(-1.05 -4.5)"
        fill={isEmpty(url) ? COLOR.iconNone : "red"}
        style={url ? {} : { pointerEvents: "none" }}
      />
    </svg>
  );
}
