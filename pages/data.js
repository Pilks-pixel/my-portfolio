const data = [
	{
		name: "Quiz Night",
		id: "QUIZ",
		src: "/quiz",
		primaryImage: "/quiz.png",
		images: ["/quiz/tablet.png", "/quiz/mobile.png", "/quiz/desktop.png"],
		video: "/quiz/quiz_screen.mp4",
		stack: ["React", "CSS", "Node.js", "Express", "MongoDB", "React Router"],
		description:
			"Quiz Night was built in React and uses the Open trivia api letting the user cusomise their quiz and uses MongoDB to store scores in a leaderboard",
	},
	{
		name: "Nou Design Studio",
		id: "NOU",
		src: "/nou",
		primaryImage: "/nou.png",
		images: ["/nou/desktop.png", "/nou/mobile.png", "/nou/tablet.png"],
		video: "/nou/nou_screen.mp4",
		stack: [
			"Next.js",
			"React",
			"CSS",
			"Responsive Design",
			"WAAPI",
			"Intersection Observer",
			"Parallax",
			"Node mailer",
		],
		description: "Nou is a brand and web design studio, inspired by minimalism",
	},
	{
		name: "Pix Chat",
		id: "CHAT",
		src: "/chat",
		primaryImage: "/nou.png",
		images: ["/chat/desktop.png", "/chat/mobile.png", "/chat/tablet.png"],
		video: "/nou/nou_screen.mp4",
		stack: ["React", "Tailwind CSS", "Node.js", "Express", "Socket IO", "JWT", "BCRYPT"],
		description: "Real time chat with Socket IO",
	},
];

export { data };

