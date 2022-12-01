// import Head from "next/head";
// import Image from "next/image";
import Mechanics from "../Components/Elements/Mechanics";
import Footer from "../Components/Layouts/Footer";
import Header from "../Components/Layouts/Header";
import Ingame from "../Components/Elements/Ingame";
import Patners from "../Components/Elements/Patners";
import Community from "../Components/Elements/Community";
import Hero from "../Components/Elements/Hero";
import Ownership from "../Components/Elements/Ownership";
import Calender from "../Components/Elements/Calender";
export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Ownership/>
    <Mechanics/>
    <Ingame/>
    <Patners/>
    <Calender/>
    <Community/>
    <Footer/>
    </>
  );
}
