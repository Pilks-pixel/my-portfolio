const data = [
	{
		name: "Quiz Night",
		id: 'QUIZ',
		primaryImage: "/quiz.png",
		images: [],
		video: "/nou/nou_screen.mp4",
		stack: ["React", "CSS", "Node.js", "Express", "MongoDB", "React Router"],
		description:
			"Quiz Night was built in React and uses the Open trivia api letting the user cusomise their quiz and uses MongoDB to store scores in a leaderboard",
	},
    {
        name: "Nou Design Studio",
		id: 'NOU',
		primaryImage: "/nou.png",
		images: ['/nou/desktop.png', '/nou/mobile.png', '/nou/tablet.png'],
		video: "/nou/nou_screen.mp4",
		stack: ["Next.js", "React", "CSS", "WAAPI", "Node mailer" ],
		description:
			"Nou is a brand and web design studio, inspired by minimalism"
    },
    {
        name: "Pix Chat",
		id: 'CHAT',
		primaryImage: "/nou.png",
		images: [],
		video: "/nou/nou_screen.mp4",
		stack: ["Next.js", "React", "CSS", "Node.js", "Express", "Socket IO" ],
		description:
			"Real time chat with Socket IO"
    }
];

export {data};
