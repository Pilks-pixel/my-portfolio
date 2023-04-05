import React from "react";
import styles from '../../styles/About.module.css'

function About() {
	return (
		<>
			<article className={styles.about}>
				<h3 className={styles.about__title}>Hi I'm<br/><span className={styles.about__big}>Pete</span></h3>
				<p className={styles.about__sub_title}>
					I love building things on the web! A person with a big appetite for
					knowledge and boundless curiosity.
				</p>
				<p>
					I'm what you might call a life long learner, having a fascination with
					technology and how things work, since a childhood filled with platform
					games and Sci-Fi. So learning to code has been a rewarding adventure,
					allowing me to create visually creative UI's with rich functionality,
					and clean code.
				</p>
				<p>
					Growing up in multicultural London, exposed me to many cultures and
					customs, teaching me empathy. Together with my experience in growing
					small businesses, frequently communicating with stakeholders on
					projects, I'm able put these experiences into practice always
					considering the user experience and accessibility.
				</p>
				<p>
					I'm a great believer in pushing outside my comfort zone, to achieve big
					things. So when facing challenges I apply the Kaizen philosophy and the
					5 P's to push though obstacles. Which means I'm excited to continue
					growing and perfecting the craft of web development.
				</p>
				<p>
					When not at the computer, you can find me nosing social science books,
					playing Suduko or looking for a cosy coffee shop or wine bar.
				</p>
			</article>

			<section className={styles.skills}>
				<h3 className={styles.skills__title}>Skills</h3>
				<p className={styles.skills__sub_title}>
					What I use to build my projects... Although I'm always trying to learn
					something new and dive deeper into what I already know.
				</p>
				<ul className={styles.skills__list}>
					<li>HTML</li>
					<li>CSS</li>
					<li>Javascript ES6</li>
					<li>React</li>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>Next.js</li>
					<li>Mongo DB</li>
					<li>Git</li>
					<li>Figma</li>
					<li>Agile Methodology</li>
				</ul>
			</section>
		</>
	);
}

export { About };
