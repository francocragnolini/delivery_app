import Head from "next/head";
import Image from "next/image";
import ProductList from "../components/ProductList";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    // the head helps with the SEO that's why we keep it
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Argentina</title>
        <meta name="description" content="Best Pizza Shop in Town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <ProductList />
    </div>
  );
}
