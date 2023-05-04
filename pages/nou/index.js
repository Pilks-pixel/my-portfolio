import React from "react";
import Head from "next/head";
import utils from "../../styles/Utils.module.css";
import styles from "../../styles/Nou.module.css";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCss3, SiJavascript, SiReact, SiGit } from "react-icons/si";
import { data } from "../data";

function nou() {
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
					/>
				);
			});
		}
	});

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
					<h2 className={utils.description__name}>Peter Pilkington</h2>
					<h1 className={utils.description__job}>full Stack developer</h1>
				</header>

				<main className={utils.main}>
					<section className={utils.title}>
						<h2 className={utils.title_primary}>Nou Design Studio</h2>
					</section>

					<section className={`${utils.hero_section} ${utils.sections}`}>
						<div className={utils.hero_section__main}>
							<Image
								className={utils.main__img}
								src='/nou.png'
								alt='Nou hero image'
								height={600}
								width={800}
								priority={true}
							/>
						</div>
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
									<li>React</li>
									<li>Next.js</li>
									<li>Responsive Design</li>
									<li>WAAPI</li>
									<li>Intersection Observer</li>
									<li>Parallax</li>
									<li>RegEx</li>
									<li>Node mailer</li>
								</ul>
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
							<p className={utils.planning_section__purpose}>
								This project was made to market and showcase projects to
								potential clients of the business. It lists the services,
								creatively displays previous projects and provides a form for
								enquiries
							</p>
							<Image
								className={utils.planning_section__image}
								src='/adobe_screenshot.png'
								alt='Trello Kanban board picture'
								height={600}
								width={800}
							/>

							<p className={utils.planning_section__planning}>
								I&apos;ve worked to the clients designs from Adobe XD, to create
								a webpage that is fully responsive. Workflow was managed with
								use of a Kanban board to outline an MVP and then break down
								goals into actionable tasks. While Version control was managed
								with GitHub, including feature branches to avoid breaking
								commits to the main branch.
							</p>
							<Image
								className={utils.planning_section__image}
								src='/trello_screenshot.png'
								alt='Trello Kanban board picture'
								height={600}
								width={800}
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

							<div className={utils.stack__features}>
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
							<div>
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
							<div>
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
							<div>
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
						<p>
							This project enabled me to learn how to create smooth animations
							according to uses scroll position. I also learned how to handle
							user inputs with email submission through node mailer and
							increased my understanding of responsive design with layout tools
							like CSS grid.
						</p>
					</section>
				</main>

				<footer className={utils.contact}>
					<h2>contact</h2>
					<div className={utils.contact__links}>
						<a href='https://github.com/Pilks-pixel' target='_blank'>
							<FaGithub size={32} />
						</a>
						<a
							href='https://www.linkedin.com/in/peter-pilkington-322262107/'
							target='_blank'
						>
							<FaLinkedin size={32} color='#0077b5' />
						</a>
					</div>
				</footer>
			</div>
		</>
	);
}

export default nou;
