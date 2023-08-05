import React from "react";
import Head from "next/head";
import utils from "../../styles/Utils.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { SiReact, SiNetlify, SiMongodb, SiTailwindcss } from "react-icons/si";
import { data } from "../data";
import { FaNodeJs } from "react-icons/fa";
import { Nav, Contact, ScrollToTop } from "@/components";

function PixChat() {
	const itemsRef = useRef(null);
	const scrollRef = useRef(null);

	// Display project media & info
	const projectImages = data.map(project => {
		if (project.id === "CHAT") {
			return project.images.map((img, index) => {
				return (
					<Image
						className={utils.flex__image}
						src={img}
						alt={`${project.name} picture`}
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
		if (project.id === "CHAT") {
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
		if (project.id === "CHAT") {
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
		threshold: 0.2,
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
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
	// eslint-enable-next-line react-hooks/exhaustive-deps

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

				<ScrollToTop pageTop={scrollRef} topElement={itemsRef} />
				<main className={utils.main} ref={scrollRef}>
					<section
						id='top_container'
						ref={node => {
							if (node) {
								const nodeArr = getArr();
								nodeArr.push(node);
							}
						}}
						className={utils.title}
					>
						<h1 className={utils.title_primary}>Pix Chat</h1>
					</section>

					<section className={`${utils.hero_section} ${utils.sections}`}>
						<div className={utils.hero_section__main}>{projectVideo}</div>
						<aside className={utils.hero_section__aside}>
							<h2 className={utils.aside__title}>Project T.L.D.R</h2>
							<p className={utils.aside__info}>
								Pixel Chat allows users to share messages and gifs with others
								that can interact with their posts. In this project, I
								demonstrate front &amp; back-end skills using React with Node.js
								, MongoDB and Tailwind CSS.
							</p>
							<div className={utils.aside__keyword}>
								<ul className={utils.keyword__list}>{stack}</ul>
							</div>
							<div className={utils.aside__links}>
								<a
									className={utils.link}
									href='https://github.com/Pilks-pixel/Socket-Chat'
									target='_blank'
								>
									Source Code
								</a>
								<a
									className={utils.link}
									href='https://pilks-pixel-chat.netlify.app'
									target='_blank'
								>
									Live Site
								</a>
							</div>
						</aside>
					</section>

					<section className={`${utils.planning_section} ${utils.sections}`}>
						<div className={utils.section_grid}>
							<div
								className={utils.planning_section__purpose}
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							>
								<h2>Purpose &amp; Planning</h2>
								<p>
									The primary purpose of Pixel Chat is to enable instant
									messaging between users whom can also share gifs, like posts
									or change their profile avatar. Each user creates a profile in
									order to, allow storage and retrieval of previous messages
									upon login, therefore I needed to use a database to store user
									credentials and protect passwords. This meant protected routes
									were required within the app to authenticate valid users.
								</p>
							</div>
							<Image
								className={utils.planning_section__image}
								src='/chat/figma_screenshot.png'
								alt='Figma design picture'
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
								Taking app requirements into consideration while planning led me
								to use the mongoose ORM with Mongo DB. I needed to store users
								and message models that interacted, therefore built my schema
								with a join between the two. I managed my work flow with a
								Trello kanban board and used Figma for prototyping the app.
							</p>
							<Image
								className={utils.planning_section__image}
								src='/chat/schema_screenshot.png'
								alt='Schema Mongo picture'
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
										<SiReact color='#61DAFB' size={42} aria-label='React' />{" "}
										React
									</li>
									<li className={utils.list__icon}>
										<FaNodeJs color='#3C873A' size={42} aria-label='Node' />
										Node.js &amp; Express.js
									</li>
									<li className={`${utils.list__icon} ${utils.list_icon}`}>
										<SiMongodb
											color='#47A248'
											size={42}
											aria-label='Mongo DB'
										/>{" "}
										MongoDB
									</li>
									<li className={utils.list__icon}>
										<SiTailwindcss
											color='#06B6D4'
											size={42}
											aria-label='Tail Wind'
										/>
										Tailwind CSS
									</li>
									<li className={`${utils.list__icon} ${utils.list_icon}`}>
										<SiNetlify size={50} color='#00ad9f' aria-label='Netlify' />
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
									The MERN stack was used, with socket IO in my backend API
									allowing instant messages between users. While creation of a
									profile, is handled with Mongo DB, &amp; bcrypt for storage,
									encryption and authentication of credentials. Additionally
									user authorization with JWT enables a login to persist across
									multiple requests.
								</p>
								<p>
									The API was built in Node.js giving full C.R.U.D functionality
									that allows users messages / profile to be updated or deleted.
									For styling I've chosen Tailwind because its utility classes
									enabled me to match my Figma prototype quickly and meant
									improved style readability inside JSX. While Netlify &amp;
									Render were used for deployment and linked with GitHub repos
									to enable continuous integration.
								</p>
							</div>
						</div>
					</section>

					<section className={`${utils.challenges} ${utils.sections}`}>
						<h2>Features &amp; Challenges</h2>
						<div className={utils.features__flex}>{projectImages}</div>
						<div
							className={`${utils.features__flex_text} ${utils.features__flex}`}
						>
							<div
								ref={node => {
									if (node) {
										const nodeArr = getArr();
										nodeArr.push(node);
									}
								}}
							>
								<h3>Like / Laugh reactions</h3>
								<p>
									I wanted users to be able to react to messages. This was
									challenging as it required updating the senders message in
									real time as well as messages stored in the database while
									additionally only rendering reactions to a sender if the
									receiver clicked a reaction button.
								</p>
								<p>
									To implement this feature, I created a function that emitted
									reactions to the socket in real time and updated the specific
									message in the database with a PUT request and mongo query. To
									ensure senders only see icons on their message when reacted
									upon, I used conditional rendering in React with hooks
									managing state of the reactions.
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
								<h3>Authorization with JWT</h3>
								<p>
									In order to ensure that only authorized users could access a
									profile I needed to create routes that were private and
									protect CRUD requests to the API.
								</p>
								<p>
									To fulfill this I&apos;ve used a JSON web token, generated upon a
									successful login or registration. This is then stored in local
									storage, allowing access for client requests to the server. I
									further use this to create private and public route components
									with React router, authenticated by the token in local
									storage. This ensures a user can only access authorized pages
									in the app.
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
								<h3>Bad Word Regex</h3>
								<p>
									Chat apps are prone to inappropriate / abusive messages
									therefore I&apos;ve decided to implement a parser built with regex
									to replace any profanities.
								</p>
								<p>
									To accomplish this I&apos;ve used an array of common inappropriate
									words and created a regex constructor which iterates the array
									matching against dynamic content from user input. I&apos;ve
									composed this with the JS replace method to match and swap the
									bad words with a crossed out alternative.
								</p>
							</div>
						</div>
					</section>

					<section className={`${utils.conclusion} ${utils.sections}`}>
						<h2>What I learned</h2>
						<h3>Accessibility &amp; Performance</h3>
						<Image
							className={utils.conclusion__image}
							src='/chat/performance_screenshot.png'
							alt='Lighthouse performance report'
							height={600}
							width={800}
						/>
						<div
							ref={node => {
								if (node) {
									const nodeArr = getArr();
									nodeArr.push(node);
								}
							}}
						>
							<p>
								Overall, this project enhanced my skills in full-stack
								development, creating real-time communication, without manual
								refreshing using React, Socket.io, and Node.js.
							</p>
							<p>
								Making API routes for C.R.U.D functionality among users /
								messages, storing them in a database, and retrieving message
								history between users, strengthened my knowledge of RESTful API
								principles and HTTP requests using the Axios library.
							</p>
							<p>
								Additionally I improved my knowledge of accessibility, testing
								the app using the VoiceOver screen reader and Axe Dev Tools
								chrome extension to ensure I met WCAG standards on
								accessibility.
							</p>
						</div>
					</section>
					<footer className={utils.contact}>
						<Contact />
					</footer>
				</main>
			</div>
		</>
	);
}

export default PixChat;
