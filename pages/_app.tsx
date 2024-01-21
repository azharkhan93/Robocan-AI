// import '../styles/fonts.css';

import Layout from '../app/layout';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout>
     
        <Component {...pageProps} />
        {/* <ToastContainer /> */}
      </Layout>
    </>
  );
}



export default MyApp;