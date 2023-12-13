import Head from "next/head";
import styles from "../styles/Home.module.css";
import GameHeader from "@/components/GameHeader/GameHeader";

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
      </main>
    </div>
  );
}
