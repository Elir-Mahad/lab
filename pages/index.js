import Head from "next/head";
import styles from "../styles/Home.module.css";
import TlbrSlantedBox from "@/components/Shared/BoxShapes/Tlbr/TlbrSlantedBox";
import About from "@/components/Home/About/About";
import ToolBox from "@/components/Home/ToolBox/ToolBox";
import GameHeader from "@/components/Home/GameHeader/GameHeader";
import Footer from "@/components/Shared/Footer/Footer";

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Proof-of-work</title>
        <meta name="keywords" content="Coding portfolio" />
        <meta name="description" content="Coding portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <GameHeader />
        <TlbrSlantedBox
          title1="About me"
          content1={<About />}
          title2="Toolbox"
          content2={<ToolBox />}
        />
        <Footer />
      </main>
    </div>
  );
}
