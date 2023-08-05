import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { matchSection } from "@/utils";
import utils from "../../styles/Utils.module.css";

const ScrollToTop = ({ pageTop, topElement }) => {
	const [showScrollBtn, setShowScrollBtn] = useState(false);

	const handleScroll = () => {
		const winScrollValue = pageTop.current.scrollTop;

		winScrollValue > 100 ? setShowScrollBtn(true) : setShowScrollBtn(false);
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		const pageTopElement = pageTop.current;

		pageTopElement.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			pageTopElement.removeEventListener("scroll", handleScroll);
		};
	}, []);
	// eslint-enable-next-line react-hooks/exhaustive-deps

	const handleClick = e => {
		const buttonId = e.currentTarget.id;

		matchSection(topElement, buttonId).scrollIntoView({
			behavior: "smooth",
			block: "start",
			inline: "center",
		});
	};

	return (
		<>
			<button
				id='top_btn'
				aria-label='back to top'
				className={`${utils.scrollBtn} ${showScrollBtn && utils.visable}`}
				onClick={e => handleClick(e)}
			>
				<FaChevronUp size={24} />
			</button>
		</>
	);
};

export { ScrollToTop };
