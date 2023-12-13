import Head from "next/head";
import styles from "../styles/Home.module.css";
import "animate.css";
import ProjectsMenuAndList from "../components/Projects/ProjectsMenuAndList/ProjectsMenuAndList";
import Footer from "../components/Shared/Footer/Footer";

export default function CodingProjects({}) {
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta
          name="keywords"
          content="Front end and data science coding projects"
        />
        <meta name="description" content="Coding portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <ProjectsMenuAndList />
        <Footer />
      </main>
    </div>
  );
}
