import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/ProjectGrid.module.css";
import Link from "next/link";
import { data } from "../../pages/data";
import { v4 as uuidv4 } from "uuid";
import { FaArrowRight } from "react-icons/fa";

function ProjectGrid() {
	// Generate random ID for data
	const cardsWithId = data.map(card => {
		return {
			...card,
			id: uuidv4(),
		};
	});

	// Render project cards from the data

	const cards = cardsWithId.map(card => {
		console.log(card);
		return (
			<Link
				href={card.src}
				key={card.id}
				className={styles.project_container__card}
			>
				<div
					className={styles.card__img}
					style={{ backgroundImage: `url(${card.primaryImage})` }}
				></div>
				<div className={styles.card__info}>
					<h3>{card.name}</h3>
					<p>{card.description}</p>
					<button className={styles.info__btn} >
					 	<p>View Project</p>	 
						<FaArrowRight style={{ color: "white" }} />
					</button>
				</div>
			</Link>
		);
	});

	return (
		<>
			<div className={styles.project_container}>{cards}</div>
		</>
	);
}

export { ProjectGrid };
