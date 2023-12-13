import Head from "next/head";
import styles from "../styles/Home.module.css";
import "animate.css";
import ProjectsMenuAndList from "../components/Projects/ProjectsMenuAndList/ProjectsMenuAndList";
import Footer from "../components/Shared/Footer/Footer";
import GeneralMenu from "@/components/Menu/GeneralMenu";

export default function CodingProjects({}) {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="keywords" content="Projects page of portfolio" />
        <meta name="description" content="Projects page of portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GeneralMenu />
      <main className={styles.main}>
        <div class="animate__animated animate__headShake animate__slower">
          <ProjectsMenuAndList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
