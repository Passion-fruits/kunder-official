import styled from "@emotion/styled";
import Header from "../Header";
import Modal from "../Modal";
import SideBar from "../SideBar";
import AudioPlayBar from "../AudioPlayBar";
import { FC, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { ToastContainer } from "react-toastify";
import { SampleProvider } from "../../../lib/context";
import { ACCESS_TOKEN } from "./../../../lib/export/localstorage";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Layout: FC = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
      if (
        router.pathname === "/wallet" ||
        router.pathname === "/feed" ||
        router.pathname === "/support"
      ) {
        router.push("/");
      }
    }
  }, [router]);
  return (
    <SampleProvider>
      <Wrapper>
        <Modal />
        <Header />
        {router.pathname !== "/lit" && <SideBar />}
        <ToastContainer position="top-right" autoClose={2000} />
        {children}
        <AudioPlayBar />
      </Wrapper>
    </SampleProvider>
  );
};

export default Layout;
