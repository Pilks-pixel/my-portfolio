import React from "react";
import styles from "../../styles/About.module.css";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiReact,
	SiMongodb,
	SiGit,
	SiFigma,
	SiTailwindcss,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import Image from "next/image";

function About() {
	return (
		<>
			<article className={styles.about}>
				<h3 className={styles.about__title}>
					Hi I&apos;m <span className={styles.about__big}>Pete</span>
				</h3>

				<p className={styles.about__sub_title}>
					I love building things on <strong>the web.</strong> A person with a
					big appetite for <strong>knowledge</strong> and boundless{" "}
					<strong>curiosity.</strong>
				</p>

				<p>
					I&apos;m what you might call a lifelong learner, having a fascination
					with technology and how things work, since a childhood filled with
					platform games and Sci-Fi.
				</p>

				<p>
					So learning to code has been a rewarding adventure, allowing me to
					create visually creative UIs with rich functionality, and clean
					code.
				</p>

				<p>
					Growing up in multicultural London, exposed me to many cultures and
					customs, teaching me empathy. Together with my experience in growing
					small businesses, and frequently communicating with stakeholders on
					projects, I&apos;m able to put these experiences into practice always
					considering the user experience and accessibility.
				</p>
				<p>
					I&apos;m a great believer in pushing outside my comfort zone, to
					achieve big things. So when facing challenges I apply the
					<a
						className={styles.about__links}
						href='https://www.agile-academy.com/en/agile-dictionary/kaizen/'
						target='_blank
            '
					>
						<em> Kaizen </em>
					</a>
					philosophy and the
					<a
						className={styles.about__links}
						href='https://kanbanize.com/lean-management/improvement/5-whys-analysis-tool'
						target='_blank'
					>
						<em> 5 Why&apos;s</em>
					</a>{" "}
					to push through obstacles. Which means I&apos;m excited to continue growing
					and perfecting the craft of web development.
				</p>
				<p>
					When not at the computer, you can find me nosing social science books,
					playing Suduko or looking for a cosy coffee shop or wine bar. ☕️
				</p>
			</article>

			<section className={styles.skills}>
				<h3 className={styles.skills__title}>Skills</h3>
				<p className={styles.skills__sub_title}>
					What I use to build my projects... Although{" "}
					<strong>I&apos;m always learning </strong>
					something new and diving deeper into what I already know.
				</p>
				<ul className={styles.skills__list}>
					<li>
						<SiHtml5 color='#E44D26' size={42} aria-label='Html' /> HTML{" "}
					</li>
					<li>
						<SiCss3 color='#1572B6' size={42} aria-label='Css' /> CSS
					</li>
					<li>
						<SiJavascript color='#F0DB4F' size={42} aria-label='Javascript' />
						Javascript
					</li>
					<li>
						<SiReact color='#61DAFB' size={42} aria-label='React' /> React
					</li>
					<li>
						<FaNodeJs color='#3C873A' size={42} aria-label='Node' />
						Node.js &amp; Express.js
					</li>
					<li>
						<SiTailwindcss color='#06B6D4' size={42} aria-label='Tailwind' />
						Tailwind CSS
					</li>
					<li>
						<SiMongodb color='#47A248' size={42} aria-label='Mongodb' /> Mongo
						DB
					</li>
					<li>
						<SiGit color='#F05032' size={42} aria-label='Git' /> Git
					</li>
					<li>
						<Image src='/next.svg' alt='Next.js icon' width={60} height={45} />
						Next.js
					</li>
					<li>
						<SiFigma color='#F24E1E' size={42} aria-label='Figma' />
						Figma
					</li>
					<li>Agile Methodology</li>
				</ul>
			</section>
		</>
	);
}

export { About };
