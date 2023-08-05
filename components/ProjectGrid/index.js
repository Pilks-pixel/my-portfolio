import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/ProjectGrid.module.css";
import Link from "next/link";
import { data } from "../../utils/data";
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
	const alternateOrder = index => index % 2;

	const cards = cardsWithId.map((card, index) => {
		const even = alternateOrder(index);
		return (
			<Link
				href={card.src}
				key={card.id}
				className={styles.project_container__card}
			>
				<div
					className={`${styles.card__img} ${even && styles.card__img_even}`}
				>
					<Image
						src={card.primaryImage}
						fill={true}
						alt={"project background image"}
						placeholder='blur'
						style={{ objectFit: "cover" }}
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
					<div className={styles.card__content}>
						<p>{card.description}</p>
					</div>
				</div>
				<div className={styles.card__info}>
					<h2 className={styles.info__heading}>{card.name}</h2>

					<div role='button' tabIndex="0" className={styles.info__btn}>
						<p>View Project</p>
						<FaArrowRight />
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
