import React from 'react'
import Head from "next/head";
import utils from "../../styles/Utils.module.css"
import Image from "next/image";
import { useRef, useEffect } from "react";
import { SiCss3, SiReact, SiNetlify, SiMongodb ,SiTailwindcss } from "react-icons/si";
import { data } from "../data";
import { FaNodeJs } from "react-icons/fa";
import { Nav, Contact } from '@/components';


function pixChat() {
	const itemsRef = useRef(null);

  // Display project media & info
	const projectImages = data.map(project => {
		if (project.id === "CHAT") {
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
		if (project.id === "QUIZ") {
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

	console.log(data[0])

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

        <div className={utils.wrapper} >
        <header className={utils.description}>
          <Nav />
        </header>

        <main className={utils.main}>
					<section className={utils.title}>
						<h2 className={utils.title_primary}>Pix Chat</h2>
					</section>

					<section className={`${utils.hero_section} ${utils.sections}`}>
						<div className={utils.hero_section__main}>{projectVideo}</div>
						<aside className={utils.hero_section__aside}>
							<h3 className={utils.aside__title}>Project T.L.D.R</h3>
							<p className={utils.aside__info}>
								Pix Chat is built to allow users to share messages and gifs with other users that can interact with their posts. In this project, I
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
								intuitive UX &amp; UI with colour signlling correct or incorrect
								answers and messages indicating the game status.
							</p>
							<Image
								className={utils.planning_section__image}
								src='/chat/figma_screenshot.png'
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
								Controller) design pattern. This provided a clear separation of
								concerns between client, server and database. With the API used
								to efficiently send requests between client and database.
								Allowing the storage and retrieval of player scores.
								<br></br>I also used the Open Trivia API for fetching quiz
								questions which could be customised by user input for enhanced
								user experience.
							</p>
							<Image
								className={utils.planning_section__image}
								src='/chat/trello_screenshot.png'
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
										<SiTailwindcss color='#06B6D4' size={42} />
										Tailwind CSS
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
									Vanilla JS to allow the use of reusable and dynamic components
									to handle real-time score tracking and countdown timers for
									each question / answer combination.
									<br></br>
									Node.js enabled server-side logic and database interactions.
									MongoDB, a NoSQL database, offered flexibility in storing and
									querying the simple nature of leaderboard data. While Netlify
									&amp; Render were used for deployment.
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
									As this funtionality only required queries from GET and POST
									requests I used a JS class to create the database schema
									without using an ORM.
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
								<h3>Dynamic Answer Buttons</h3>
								<p>
									To create an intuitive UX &amp; UI, I've used button colour to
									indicate correct / incorrect answers on click or at countdown
									0. To show these and and generate new questions in a single
									function I had to utilise set timeout function. Thus ensuring
									less code repetition and enhanced readability.
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
								<h3>Timer Custom Hook</h3>
								<p>
									Adding a timer feature provides some extra excitment to the
									quiz and would typically be acomplished using a setInterval
									function. However the challenge was the setInerval API is not
									compatible with React's state re-renders.
								</p>
								<p>
									Therefore I needed implement a custom hook that made use of
									the useRef hook to persit values between renders. Allowing the
									counts previous values to be acessed and decreased between
									renders.
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
							Durring this project I've honed my proficiency in React, making
							use of reusable components and state management with hooks to
							create a dynamic and interactive UI. Therefore I also had to learn about
							ARIA conventions to ensure accessability for all users with dynamic
							content.
							<br></br>Further to this I gained experience in setting up a database using
							MongoDB and implementing CRUD operations to manage leaderboard
							entries. Giving me valuable experience of a Full Stack Application.
						</p>
					</section>
				

        </main>

        <footer className={utils.contact}>
              <Contact />
        </footer>
      </div>


    </>
  )
}

export default pixChat