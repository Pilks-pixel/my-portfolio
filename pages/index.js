import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { About, ProjectGrid } from "@/components/index";


export default function Home() {
	const [projectVisable, setProjectViable] = useState(false);
	const [aboutVisable, setAboutViable] = useState(false);
	const projectRef = useRef(null);
	const aboutRef = useRef(null);

	const handleClick = e => {
    let sectionNode 

    e.target.id === "projects_btn"? sectionNode = projectRef.current
      : sectionNode = aboutRef.current;
    
      sectionNode.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
  
	};

	return (
		<>
			<Head>
				<title>Peter Pilkington | web developer portfolio</title>
				<meta
					name='description'
					content='peter pilkington junior software developer portfolio'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

      <div className={styles.wrapper} >
        <header className={styles.description}>
          <h2 className={styles.description__name}>Peter Pilkington</h2>
          <h1 className={styles.description__job}>full Stack developer</h1>
        </header>

        <main className={styles.main}>
          <section className={styles.center}>
            <button
              id='projects_btn'
              className={`${styles.center__btn} ${styles.center__btn_gradient}`}
              onClick={e => handleClick(e)}
              aria-expanded={projectVisable}
              aria-controls='project_container'
            >
              <span>&lt;</span> Projects
            </button>
            <button
              id='about_btn'
              className={`${styles.center__btn} ${styles.center__btn_about}`}
              onClick={e => handleClick(e)}
              aria-expanded={aboutVisable}
              aria-controls='about_container'
            >
              About /&gt;
            </button>
          </section>

          <section
            ref={projectRef}
            className={`${styles.grid}`}
            id='project_container'
          >
            <ProjectGrid />
          </section>

          <section
            ref={aboutRef}
            className={`${styles.about_article}`}
            id='about_container'
          >
            <About />
          </section>

        </main>

        <footer className={styles.contact}>
          <h2>contact</h2>
          <div className={styles.contact__links}>
            <a href='https://github.com/Pilks-pixel' target='_blank'>
            <FaGithub size={32} />
            </a>
            <a
              href='https://www.linkedin.com/in/peter-pilkington-322262107/'
              target='_blank'
            >
            <FaLinkedin size={32} color="#0077b5" />
            </a>
          </div>
        </footer>
      </div>
		</>
	);
}
