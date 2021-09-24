import { useRouter } from "next/dist/client/router";
import React from "react";
import { ACCESS_TOKEN } from "./../../lib/export/localstorage";
import { toast } from "react-toastify";
export default function Link({ menu, route }) {
  const router = useRouter();
  const routing = React.useCallback(() => {
    if (route === "upload" && !localStorage.getItem(ACCESS_TOKEN)) {
      toast.info("로그인 후 이용해주세요.");
      return;
    }
    router.push("/" + route);
  }, []);
  return <span onClick={routing}>{menu}</span>;
}
