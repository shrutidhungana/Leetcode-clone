import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    
      <RecoilRoot>
        <Head>
          <title>LeetClone</title>

          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Web Application that contain leetcode problems and video solutions"
          />
          <link rel="icon" href="/favicon.png" />
      </Head>
      <ToastContainer />
        <Component {...pageProps} />
      </RecoilRoot>
    
  );
};

export default App;
