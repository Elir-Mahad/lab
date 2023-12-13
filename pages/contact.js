import Head from "next/head";
import styles from "../styles/Home.module.css";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Shared/Footer/Footer";

export default function ContactPage({}) {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="keywords" content="Contact page of portfolio" />
        <meta name="description" content="Contact page of portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
