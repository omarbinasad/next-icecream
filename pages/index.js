import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Hero from "../components/Hero";
import TopFlavours from "../components/TopFlavours";
import { getAllProducts } from "../lib/productStore";
import styles from "../styles/Home.module.css";


export default function Home({products}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ice-Cream World</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Hero />
      <AboutUs/>
      <TopFlavours products={products}/>
      <ContactUs/>
    </div>
  );
}


export const getServerSideProps = async () => {
  const products = await getAllProducts();
  return {
    props: {
      products,
    },
  };
};

