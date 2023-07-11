import React from "react";
import Head from "next/head";
import utils from "../../styles/Utils.module.css";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { SiCss3, SiJavascript, SiReact,} from "react-icons/si";
import { data } from "../data";
import { Contact, Nav } from "@/components";

function nou() {
	const itemsRef = useRef(null);

	// Display projects media & info
	const projectImages = data.map(project => {
		if (project.id === "NOU") {
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
		if (project.id === "NOU") {
		  return(
			project.stack.map((item, index) => {
			  return <li key={index} >{item}</li>
			})
		  )
		}
	  })
	

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
						<h2 className={utils.title_primary}>Nou Design Studio</h2>
					</section>

					<section className={`${utils.hero_section} ${utils.sections}`}>
						<div className={utils.hero_section__main}>{projectVideo}</div>
						<aside className={utils.hero_section__aside}>
							<h3 className={utils.aside__title}>Project T.L.D.R</h3>
							<p className={utils.aside__info}>
								This site was created for a branding and web design studio. It's
								built with React / Next.js, showcasing reponsive design,
								animations including parallax scroll, web animations API, forms
								with validation and email submission.
							</p>
							<div className={utils.aside__keyword}>
								<ul className={utils.keyword__list}>
									{stack}
								</ul>
							</div>
							<div className={utils.aside__links}>
								<a
									className={utils.link}
									href='https://github.com/Pilks-pixel/Nou'
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
								This project was made to market and showcase projects to
								potential clients of the business. It lists the services,
								creatively displays previous projects and provides a form for
								enquiries
								</p>
							</div>
							<Image
								className={utils.planning_section__image}
								src='/nou/adobe_screenshot.png'
								alt='adobe XD picture'
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
								I&apos;ve worked to the clients designs from Adobe XD, to create
								a webpage that is fully responsive. Workflow was managed with
								use of a Kanban board to outline an MVP and then break down
								goals into actionable tasks. While Version control was managed
								with GitHub, including feature branches to avoid breaking
								commits to the main branch.
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
						<h2>Stack &amp; Features</h2>
						<div className={utils.section_grid}>
							<div className={utils.stack__icons}>
								<ul className={utils.icons__list}>
									<li className={utils.list__icon}>
										<SiReact color='#61DAFB' size={42} /> React
									</li>
									<li className={`${utils.list__icon} ${utils.list_img}`}>
										<Image
											src='/next.svg'
											alt='Next.js icon'
											width={60}
											height={60}
										/>
										Next.js
									</li>
									<li className={utils.list__icon}>
										<SiCss3 color='#1572B6' size={42} />
										CSS
									</li>
									<li className={utils.list__icon}>
										<SiJavascript color='#F0DB4F' size={42} />
										Javascript ES6
									</li>
									<li className={`${utils.list__icon} ${utils.list_img}`}>
										<Image
											src='/vercel.svg'
											alt='Next.js icon'
											width={60}
											height={60}
										/>
										Vercel
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
									This website is built with React and the Next.js meta
									framework. Next enabled optimised development and deployment
									features like automatic code spliting, lazy loaded images and
									improved SEO. Allowing me to deliver a performant website with
									excellent user experience.
									<br></br>
									Next also meant Vercel was used for deployment, which meant I
									could utilise seprate production and feature deployments
									alongside version control.
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
								<h3>Animations</h3>
								<p>
									Parallax scroll was used with CSS transitions to add fliar to
									the site. I also chose to use an the web animation API with an
									intersection observer which allowed animation according to
									viewport position, giving a more polished UI and improved
									perfomance.
								</p>
								<p>
									This was tricky as I wanted different elements to fade in at
									array of Refs and iterate over in the observer. This allowed
									me to animate elements based on position in the viewport and
									apply delays based on element tag names.
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
								<h3>Responsive layouts</h3>
								<p>
									Getting the site to be responsive at all screen sizes, meant
									needing to utilize layout tools like Grid and Flexbox. Media
									queries were also useful to define breakpoints but I tried to
									implement modern CSS functions like clamp in order to give
									staggered timings, so had to use callback functions to create
									an responsive text without media queries.
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
									const  nodeArr = getArr();
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
					<footer className={utils.contact}>
						<Contact />
					</footer>
				</main>

			</div>
		</>
	);
}

export default nou;
