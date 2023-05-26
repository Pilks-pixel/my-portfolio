import React from "react";
import Head from "next/head";
import utils from "../../styles/Utils.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";
import {
	SiCss3,
	SiJavascript,
	SiReact,
	SiGit,
	SiNetlify,
	SiMongodb,
	SiNodedotjs,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { data } from "../data";
import { Contact, Nav } from "@/components";

function quiz() {
	const itemsRef = useRef(null);

	// Display project media & info
	const projectImages = data.map(project => {
		if (project.id === "QUIZ") {
			return project.images.map((img, index) => {
				return (
					<Image
						className={utils.flex__image}
						src={img}
						alt={`${project.name} picture`}
						height={600}
						width={800}
						key={index}
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
					/>
				);
			});
		}
	});

	const projectVideo = data.map(project => {
		if (project.id === "NOU") {
			return (
				<video
					width='800'
					height='600'
					className={utils.main__img}
					preload='auto'
					key={project.id}
					controls
				>
					<source src={project.video} type='video/mp4' />
				</video>
			);
		}
	});

	const stack = data.map(project => {
		if (project.id === "QUIZ") {
			return project.stack.map((item, index) => {
				return <li key={index}>{item}</li>;
			});
		}
	});

	// WAAPI animations
	const fadeInKeyImgFrame = [
		{ opacity: 0, filter: "blur(8px)" },
		{ opacity: 1, filter: "blur(0)" },
	];

	const fadeInKeyTextFrame = [
		{ opacity: 0, filter: "blur(8px)" },
		{ opacity: 1, filter: "blur(0)" },
	];

	const imageTiming = {
		duration: 1000,
		iterations: 1,
		fill: "both",
		easing: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
	};

	const textTiming = {
		duration: 1000,
		iterations: 1,
		fill: "both",
		easing: "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
		delay: 500,
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
		threshold: 0.5,
	};

	useEffect(() => {
		const callback = (entries, observer) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return;
				}

				if (entry.target.tagName.toLowerCase() === "img") {
					entry.target.animate(fadeInKeyImgFrame, imageTiming);
				} else {
					entry.target.animate(fadeInKeyTextFrame, textTiming);
				}

				observer.unobserve(entry.target);
			});
		};

		const observer = new IntersectionObserver(callback, options);

		let target = itemsRef.current;

		target.forEach(item => observer.observe(item));
	}, [itemsRef]);

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

			<div className={utils.wrapper}>
				<header className={utils.description}>
					<Nav />
				</header>

				<main className={utils.main}>
					<section className={utils.title}>
						<h2 className={utils.title_primary}>Quiz Night</h2>
					</section>

					<section className={`${utils.hero_section} ${utils.sections}`}>
						<div className={utils.hero_section__main}>{projectVideo}</div>
						<aside className={utils.hero_section__aside}>
							<h3 className={utils.aside__title}>Project T.L.D.R</h3>
							<p className={utils.aside__info}>
								Quiz Night was designed to provide a fun and interactive quiz
								experience using the Open trivia API. Users can customise each
								quiz by subject or difficulty and features a leaderboard where
								players high scores are persisted. Through this project, I
								demonstrate front &amp; back-end skills using React with Node.js
								and MongoDB.
							</p>
							<div className={utils.aside__keyword}>
								<ul className={utils.keyword__list}>{stack}</ul>
							</div>
							<div className={utils.aside__links}>
								<a
									className={utils.link}
									href='https://github.com/Pilks-pixel'
									target='_blank'
								>
									Source Code
								</a>
								<a
									className={utils.link}
									href='https://noudesignstudio.vercel.app'
									target='_blank'
								>
									Live Site
								</a>
							</div>
						</aside>
					</section>

					<section className={`${utils.planning_section} ${utils.sections}`}>
						<h2>Purpose &amp; Planning</h2>
						<div className={utils.section_grid}>
							<p
								className={utils.planning_section__purpose}
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							>
								The purpose of the project was to create a quiz app that
								entertains users while enhances their knowledge under time
								pressure. I've planned the app's functionality to create an
								intuative UX &amp; UI with colour sinalling correct or incorrect
								answers and messages idicating the game status.
							</p>
							<Image
								className={utils.planning_section__image}
								src='/nou/adobe_screenshot.png'
								alt='Trello Kanban board picture'
								height={600}
								width={800}
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							/>

							<p
								className={utils.planning_section__purpose}
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							>
								While planning the app, I choose to use the MVC (Model, View,
								Controller) design pattern. This provided a clear seperation of
								concerns between client, server and database. With the API used
								to efficiently send requests between client and database.
								Allowing the storage and retrieval of player scores.
								<br></br>I also used the Open Trivia API for fetching quiz
								questions which could be customised by user input for enhanced
								user experience.
							</p>
							<Image
								className={utils.planning_section__image}
								src='/nou/trello_screenshot.png'
								alt='Trello Kanban board picture'
								height={600}
								width={800}
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							/>
						</div>
					</section>

					<section className={`${utils.stack} ${utils.sections}`}>
						<h2>Stack</h2>
						<div className={utils.section_grid}>
							<div className={utils.stack__icons}>
								<ul className={utils.icons__list}>
									<li className={utils.list__icon}>
										<SiReact color='#61DAFB' size={42} /> React
									</li>
									<li className={utils.list__icon}>
										<FaNodeJs color='#3C873A' size={42} />
										Node.js &amp; Express.js
									</li>
									<li className={`${utils.list__icon} ${utils.list_icon}`}>
										<SiMongodb color='#47A248' size={42} /> MongoDB
									</li>
									<li className={utils.list__icon}>
										<SiCss3 color='#1572B6' size={42} />
										CSS
									</li>
									<li className={`${utils.list__icon} ${utils.list_icon}`}>
										<SiNetlify size={50} color='#00ad9f' />
										Netlify
									</li>
								</ul>
							</div>

							<div
								className={utils.stack__features}
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							>
								<p>
									The app was built using the MERN stack, React for front-end
									and Node.js with MongoDB for the back-end. React was used over
									Vanilla JS as it allowed the use of reusable and dynamic
									components to handle real-time score tracking and countdown
									timers for each question / answer combination.
									<br></br>
									Node.js enabled server-side logic and database interactions.
									MongoDB, a NoSQL database, offered flexibility in storing and
									querying the simple nature of leaderboard data.
								</p>
							</div>
						</div>
					</section>

					<section className={`${utils.challenges} ${utils.sections}`}>
						<h2>Features &amp; Challenges</h2>
						<div className={utils.features__flex}>{projectImages}</div>
						<div className={utils.features__flex}>
							<div
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							>
								<h3>Leaderboard</h3>
								<p>
									Creating the leaderboard functionality involved designing the
									database schema, implementing data retrieval and insertion
									CRUD operations.
								</p>
								<p>
									As the funtionality only required queries from GET and POST requests I
									opted not to use an ORM and used a JS class to create the
									database schema.
								</p>
							</div>
							<div
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							>
								<h3>Reactive Buttons</h3>
								<p>
									
								</p>
							</div>
							<div
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							>
								<h3>Contact Form</h3>
								<p>
									The useState hook allowed a controlled form with validation
									for user input, including Regex pattern for email inputs. I
									was able to make use of the in built next js API. This allowed
									me to handle form submission of user data with the node mailer
									library.
								</p>
							</div>
						</div>
					</section>

					<section className={`${utils.conclusion} ${utils.sections}`}>
						<h2>What I learned</h2>
						<p
							ref={node => {
								if (node) {
									const nodeArr = getArr();
									nodeArr.push(node);
								}
							}}
						>
							This project enabled me to learn how to create smooth animations
							according to uses scroll position. I also learned how to handle
							user inputs with email submission through node mailer and
							increased my understanding of responsive design with layout tools
							like CSS grid.
						</p>
					</section>
				</main>

				<footer className={utils.contact}>
					<Contact />
				</footer>
			</div>
		</>
	);
}

export default quiz;
