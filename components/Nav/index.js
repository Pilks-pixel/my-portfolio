import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";

function Nav() {
	const [mobileNav, setMobileNav] = useState(false);

	const handleClick = () => {
		setMobileNav(prevMobile => !prevMobile);
	};

	return (
		<>
			<h2 className={styles.description__name}>Peter Pilkington</h2>

			<button
				className={styles.mobileNavToggle}
				aria-controls='navPrimary'
				aria-expanded={mobileNav}
				onClick={handleClick}
			>
				<span className={styles.srOnly}></span>
			</button>
			<div className={
						mobileNav
							? styles.description__navPrimary
							: `${styles.description__navPrimary} ${styles.description__navPrimaryHidden}`
					}>

				<Link href="/">
					Home
				</Link>

				<a href='https://github.com/Pilks-pixel' target='_blank'>
					Github
				</a>

				<a
					href='https://www.linkedin.com/in/peter-pilkington-322262107/'
					target='_blank'
				>
					Linkedin
				</a>
			</div>
		</>
	);
}

export { Nav };
