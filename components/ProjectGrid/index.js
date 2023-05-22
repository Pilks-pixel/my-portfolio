import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/ProjectGrid.module.css";
import Link from "next/link";
import { data } from "../../pages/data";
import { v4 as uuidv4 } from "uuid";


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
			>
				<div 
				className={styles.project_container__card}
				style={{'backgroundImage' : `url(${card.primaryImage})`}}
				>
					<div className={styles.card__info}>
						<h3>{card.name}</h3>
						<p>{card.description}</p>
					</div>
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
