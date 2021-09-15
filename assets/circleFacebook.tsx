import { COLOR } from "./../styles/index";
import { isEmpty } from './../lib/util/isEmpty';
export default function CircleFacebookIcon({ url, callback }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.097"
      height="22.957"
      viewBox="0 0 23.097 22.957"
      onClick={() => callback(url)}
      style={!isEmpty(url) ? {} : { pointerEvents: "none" }}
    >
      <path
        id="Icon_simple-facebook"
        data-name="Icon simple-facebook"
        d="M23.1,11.549A11.549,11.549,0,1,0,9.744,22.957v-8.07H6.812V11.549H9.744V9c0-2.894,1.724-4.493,4.362-4.493a17.761,17.761,0,0,1,2.585.226V7.579H15.235a1.669,1.669,0,0,0-1.882,1.8v2.166h3.2l-.512,3.338H13.353v8.07A11.551,11.551,0,0,0,23.1,11.549Z"
        fill={isEmpty(url) ? COLOR.iconNone : "#1e8fff"}
      />
    </svg>
  );
}
