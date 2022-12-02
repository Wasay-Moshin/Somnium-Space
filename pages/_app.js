import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Layout from '../Components/Layouts/Layout';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
