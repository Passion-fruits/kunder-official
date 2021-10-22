import { useRouter } from "next/dist/client/router";
import { ACCESS_TOKEN } from "../../../lib/export/localstorage";
import { toast } from "react-toastify";
import { COLOR } from "../../../styles/index";
export default function Link({ menu, route, color = COLOR.gray_text }) {
  const router = useRouter();
  const routing = () => {
    if (route === "upload" && !localStorage.getItem(ACCESS_TOKEN)) {
      toast.info("로그인 후 이용해주세요.");
      return;
    }
    router.push("/" + route);
  };
  return (
    <span className="menu" style={{ color: color }} onClick={routing}>
      {menu}
    </span>
  );
}
