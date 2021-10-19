import { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { SampleProvider } from "./../lib/context/index";
import Head from "next/head";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import AudioPlayBar from "../components/AudioPlayBar";
import Header from "../components/header";
import Modal from "../components/Modal";
import SideBar from "../components/SideBar";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>KUNDER</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css"
        />
        <link
          href="https://allfont.net/allfont.css?fonts=agency-fb-bold"
          rel="stylesheet"
          type="text/css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/1.4.0/wavesurfer.min.js"></script>
        <link rel="icon" href="/logo.ico" />
      </Head>
      <SampleProvider>
        <Modal />
        <Header />
        {router.pathname !== "/lit" && <SideBar />}
        <ToastContainer position="top-right" autoClose={2000} />
        <Component {...pageProps} />
        <AudioPlayBar />
      </SampleProvider>
    </>
  );
}

export default App;
