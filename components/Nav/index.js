import React from "react";
import Link from "next/link";
import utils from "../../styles/Utils.module.css";

function Nav() {
	return (
		<>
			<h2 className={utils.description__name}>
				<Link href='/'>Peter Pilkington</Link>
			</h2>
			<h1 className={utils.description__job}>
				<Link href='/'>full Stack developer</Link>
			</h1>
		</>
	);
}

export { Nav };
