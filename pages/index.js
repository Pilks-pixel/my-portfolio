import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState, useRef, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { matchSection, asciiArt } from "@/utils";
import { About, ProjectGrid, ScrollToTop, Nav } from "@/components/index";

export default function Home() {
	const [projectVisable, setProjectViable] = useState(false);
	const [aboutVisable, setAboutViable] = useState(false);
	const itemsRef = useRef(null);
	const scrollRef = useRef(null);

	const handleClick = e => {
		const buttonId = e.target.id;

		matchSection(itemsRef, buttonId).scrollIntoView({
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	console.log(asciiArt);

	return (
		<>
			<Head>
				<title>Peter Pilkington | web developer portfolio</title>
				<meta
					name='description'
					content='peter pilkington junior software developer portfolio'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='favicon_io/apple-touch-icon.png'
				></link>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='favicon_io/favicon-32x32.png'
				></link>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='favicon_io/favicon-16x16.png'
				></link>
				<link rel='manifest' href='favicon_io/site.webmanifest'></link>
			</Head>

			<div className={styles.wrapper}>
				<header className={styles.description}>
					<Nav handleScroll={handleClick} />
				</header>

				<ScrollToTop pageTop={scrollRef} topElement={itemsRef} />
				<main className={styles.main} ref={scrollRef}>
					<section
						id='top_container'
						className={styles.center}
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
					>
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
						<h1 className={styles.center__title}>FULL STACK DEVELOPER </h1>
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
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
						className={styles.container__contact}
					>
						<div className={styles.contact}>
							<div className={styles.contact__info}>
								<h2>Let’s work together</h2>
								<p>peterpilkington@hotmail.com</p>
								<p>+44 07914757197</p>
							</div>

							<a
								className={styles.contact__btn}
								href='mailto:peterpilkington@hotmail.com'
							>
								GET IN TOUCH <FaArrowRight className={styles.btn__arrow} />
							</a>
						</div>
						<h3 className={styles.contact__tagline}>PETER PILKINGTON 2022</h3>
					</footer>
				</main>
			</div>
		</>
	);
}
