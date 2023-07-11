import React from "react";
import Link from "next/link";
import utils from "../../styles/Utils.module.css";

function Nav() {
	return (
		<>
			<h2 className={utils.description__name}>Peter Pilkington</h2>
			<div className={utils.description__links}>
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
