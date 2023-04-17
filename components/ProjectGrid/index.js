import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/ProjectGrid.module.css";
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
			<div 
            className={styles.project_container__card}
            key={card.id}
            style={{'backgroundImage' : `url(${card.image})`}}
            >
                <div className={styles.card__info}>
				    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                </div>
			</div>
		);
	});

	return (
		<>
			<div className={styles.project_container}>{cards}</div>
		</>
	);
}

export { ProjectGrid };
