// import Head from "next/head";
// import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Mechanics from "../Components/Elements/Mechanics";
import Footer from "../Components/Layouts/Footer";
import Header from "../Components/Layouts/Header";
// import "bootstrap/dist/js/bootstrap.bundle";
export default function Home() {
  return (
    <>
    <Header/>
    <Mechanics/>
    <Footer/>
    </>
  );
}
