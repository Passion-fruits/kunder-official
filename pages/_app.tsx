import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/common/Layout";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>KUNDER</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
