import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import PopularArea from "../components/PopularArea";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
<div>

      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <title>Adidas-Clone</title>
      </Head>
      <Navbar />
      <Header />
      <PopularArea />
      <Footer />
</div>
  );
}
