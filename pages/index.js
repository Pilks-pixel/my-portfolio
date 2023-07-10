import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { About, ProjectGrid } from "@/components/index";

export default function Home() {
	const [projectVisable, setProjectViable] = useState(false);
	const [aboutVisable, setAboutViable] = useState(false);
	const itemsRef = useRef(null);

	const handleClick = e => {
		function matchSection() {
			const firstWordPattern = new RegExp(e.target.id.split("_")[0]);

			const sectionNode = itemsRef.current.filter(node => {
				return firstWordPattern.test(node.id);
			});
			return sectionNode[0];
		}

		matchSection().scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "center",
		});
	};

	// Intersection Observer Appear on Scroll Logic
	function getArr() {
		if (!itemsRef.current) {
			itemsRef.current = [];
		}
		return itemsRef.current;
	}

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.2,
	};

	const callback = (entries, observer) => {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			}

			entry.target.classList.add(`${styles.visable}`);

			observer.unobserve(entry.target);
		});
	};

	useEffect(() => {
		const observer = new IntersectionObserver(callback, options);

		let target = itemsRef.current;

		target.forEach(item => observer.observe(item));
	}, []);

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

			<div className={styles.wrapper}>
				<header className={styles.description}>
					<h2 className={styles.description__name}>Peter Pilkington</h2>
					<div className={styles.description__links}>
						<a id='contact_btn' tabIndex="0" onClick={e => handleClick(e)}>
							Contact
						</a>
						<a href='https://github.com/Pilks-pixel' target='_blank'>
							Github
						</a>
						<a
							href='https://www.linkedin.com/in/peter-pilkington-322262107/'
							target='_blank'
						>
							Linkedin
						</a>
					</div>
				</header>

				<main className={styles.main}>
					<section className={styles.center}>
						<button
							id='project_btn'
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
							About&nbsp;/&gt;
						</button>
						<h2 className={styles.center__title}>FULL STACK DEVELOPER </h2>
					</section>

					<section
						className={`${styles.grid}`}
						id='project_container'
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
					>
						<ProjectGrid />
					</section>

					<section
						className={`${styles.about_article}`}
						id='about_container'
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
					>
						<About />
					</section>
					<footer
						id='contact_container'
						className={styles.contact}
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
					>
						<div className={styles.contact__info}>
							<h2>Let’s work together</h2>
							<p>peterpilkington@hotmail.com</p>
							<p>+44 07804839393</p>
						</div>
						<button className={styles.contact__btn}>
							<a href='mailto:peterpilkington@hotmail.com'>GET IN TOUCH</a>
							<FaArrowRight className={styles.btn__arrow}/>
						</button>
					</footer>
					<h4 className={styles.tagline}>PETER PILKINGTON 2022</h4>
				</main>
			</div>
		</>
	);
}
