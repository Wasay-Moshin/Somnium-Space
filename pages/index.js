// import Head from "next/head";
// import Image from "next/image";
import Mechanics from "../Components/Elements/Mechanics";
import Footer from "../Components/Layouts/Footer";
import Header from "../Components/Layouts/Header";
import Ingame from "../Components/Elements/Ingame";
import Patners from "../Components/Elements/Patners";
import Community from "../Components/Elements/Community";
export default function Home() {
  return (
    <>
    <Header/>
    <Mechanics/>
    <Ingame/>
    <Patners/>
    <Community/>
    <Footer/>
    </>
  );
}
