import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";

function Nav({ handleScroll }) {
	const [mobileNav, setMobileNav] = useState(false);
	const router = useRouter();

	const handleClick = () => {
		setMobileNav(prevMobile => !prevMobile);
	};

	return (
		<>
			<h2 className={styles.description__name}>Peter Pilkington</h2>

			<button
				className={styles.mobileNavToggle}
				aria-label='mobile menu'
				aria-controls='navPrimary'
				aria-expanded={mobileNav}
				onClick={handleClick}
			>
				<span className={styles.srOnly}></span>
			</button>
			<div
				id='navPrimary'
				className={
					mobileNav
						? styles.description__navPrimary
						: `${styles.description__navPrimary} ${styles.description__navPrimaryHidden}`
				}
			>
				{router.asPath === "/" ? (
					<a
						id='contact_btn'
						tabIndex='0'
						onClick={e => {
							handleScroll(e);
							handleClick();
						}}
					>
						Contact
					</a>
				) : (
					<Link href='/'>Home</Link>
				)}
				<a
					href='https://github.com/Pilks-pixel'
					target='_blank'
					onClick={handleClick}
				>
					Github
				</a>

				<a
					href='https://www.linkedin.com/in/peter-pilkington-322262107/'
					target='_blank'
					onClick={handleClick}
				>
					Linkedin
				</a>
			</div>
		</>
	);
}

export { Nav };
