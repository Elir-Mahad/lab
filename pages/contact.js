import Head from "next/head";
import styles from "../styles/Home.module.css";
import "animate.css";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Shared/Footer/Footer";
import GeneralMenu from "@/components/Menu/GeneralMenu";

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
      <GeneralMenu />
      <main className={styles.main}>
        <div class="animate__animated animate__headShake animate__slower">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
