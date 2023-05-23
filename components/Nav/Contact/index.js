import React from "react";
import utils from "../../../styles/Utils.module.css"; 
import { FaGithub, FaLinkedin } from "react-icons/fa";


function Contact() {
	return (
		<>
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
		</>
	);
}

export { Contact };
