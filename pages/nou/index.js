import React from "react";
import Head from "next/head";
import utils from "../../styles/Utils.module.css";
import styles from "../../styles/Nou.module.css";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
								built with React / Next.js, showcasing reponsive design, animations
								including the web animations API, forms with regex validation and
								email submission. 
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
                            <div className={utils.aside__btns}>
                                <button className={utils.btn}>Live Site</button>
                                <button className={utils.btn}>Source Code</button>
                            </div>
						</aside>
					</section>

                    <section className={utils.planning_section}>
                        <h2>Purpose &amp; Planning</h2>

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
