import React from "react";
import utils from "../../../styles/Utils.module.css"; 
import Link from "next/link";


function Contact() {
	return (
		<>
			<div className={utils.contact__links}>
				<Link href='/#project_container'>
					More Projects
				</Link>
				<Link href='/#contact_container'>
					Contact
				</Link>
			</div>
		</>
	);
}

export { Contact };
