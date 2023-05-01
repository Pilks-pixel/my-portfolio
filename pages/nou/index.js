import React from "react";
import Head from "next/head";
import utils from "../../styles/Utils.module.css";
import styles from "../../styles/Nou.module.css";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCss3, SiJavascript, SiReact, SiGit } from "react-icons/si";

function nou() {
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

					<section className={utils.hero_section}>
						<div className={utils.hero_section__main}>
							<Image
								className={utils.main__img}
								src='/nou.png'
								alt='Nou hero image'
								height={600}
								width={800}
							/>
						</div>
						<aside className={utils.hero_section__aside}>
							<h3 className={utils.aside__title}>Project T.L.D.R</h3>
							<p className={utils.aside__info}>
								This site was created for a branding and web design studio. It's
								built with React / Next.js, showcasing reponsive design,
								animations including the web animations API, forms with regex
								validation and email submission.
							</p>
							<div className={utils.aside__keyword}>
								<ul className={utils.keyword__list}>
									<li>React</li>
									<li>Next.js</li>
									<li>Responsive Design</li>
									<li>WAAPI</li>
									<li>Intersection Observer</li>
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
									href='https://nou-ng2gsrpkw-pilks-pixel.vercel.app/'
									target='_blank'
								>
									Live Site
								</a>
							</div>
						</aside>
					</section>

					<section className={utils.planning_section}>
                        <h2>Purpose &amp; Planning</h2>
                        <div className={utils.section_grid}>
                            <p className={utils.planning_section__purpose}>
                                This project was made to market and showcase projects to potential
                                clients of the business. It lists the services, creatively
                                displays previous projects and provides a form for enquiries
                            </p>
                            <Image
                                className={utils.planning_section__image}
                                src="/adobe_screenshot.png"
                                alt='Trello Kanban board picture'
                                height={600}
                                width={800}
                            />

                            <p className={utils.planning_section__planning}>
                                I&apos;ve utilised the clients designs from Adobe XD, to create a
                                mobile first webpage that is responsive for tablet and desktops.
                                Workflow was managed with use of a Kanban board to outline an MVP
                                and then break down goals into actionable tasks. While Version
                                control was managed with GitHub, including feature branches to
                                avoid breaking commits to the main branch.
                            </p>
                            <Image
                                className={utils.planning_section__image}
                                src="/trello_screenshot.png"
                                alt='Trello Kanban board picture'
                                height={600}
                                width={800}
                            />
                        </div>
					</section>

					<section className={utils.stack}>
						<h2>Stack &amp; Features</h2>
                        <div className={utils.section_grid}>
                            <div className={utils.stack__icons}>
                                <ul className={utils.icons__list}>
                                    <li>
                                        <SiReact color='#61DAFB' size={42} /> React
                                    </li>
                                    <li>
                                        <Image
                                            src='/next.svg'
                                            alt='Next.js icon'
                                            width={60}
                                            height={60}
                                        />
                                        Next.js
                                    </li>
                                    <li>
                                        <SiCss3 color='#1572B6' size={42} />
                                        CSS
                                    </li>
                                    <li>
                                        <SiJavascript color='#F0DB4F' size={42} />
                                        Javascript ES6
                                    </li>
                                    <li>
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
                                <h3 className={utils.features_heading}>Stack</h3>
                                <p>
                                    This website is built with React and the Next.js meta framework.
                                    Next enabled optimised development and deployment features like
                                    automatic code spliting, lazy loaded images and improved SEO.
                                    Allowing me to deliver a performant website with excellent user
                                    experience.
                                    <br></br>
                                    Next also meant Vercel was used for deployment, which meant I
                                    could utilise seprate production and feature deployments
                                    alongside version control.
                                </p>

                                <h3 className={utils.features_heading}>Features</h3>
                                <p>
                                    Animations were used to add fliar to the site with transitions
                                    and CSS pseudo elements. I also chose to use an the web
                                    animation API with an intersection observer which allowed
                                    animation only when entering the viewport, giving a more
                                    polished UI and improved perfomance.
                                </p>
                            </div>
                        </div>
					</section>

					<section className={utils.challenges}>
						<h2>Challenges and wins</h2>
					</section>

					<section className={utils.conclusion}>
						<h2>What I learned</h2>
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
