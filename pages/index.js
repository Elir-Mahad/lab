import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({}) {
  return (
    <div>
      <Head>
        <title>Proof-of-work</title>
        <meta
          name="keywords"
          content=" Frontend development, JavaScript, Coding blog, Coding tutorials, Data science,"
        />
        <meta name="description" content="Coding portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <h1>hello</h1>
      </main>
    </div>
  );
}
