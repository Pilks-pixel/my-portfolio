const data = [
	{
		name: "Quiz Night",
		id: "QUIZ",
		src: "/quiz",
		primaryImage: "mock_quiz.png",
		images: ["/quiz/questions_screenshot.png", "/quiz/mobile_test.png", "/quiz/leaderboard_screenshot.png"],
		
		video: "/quiz/compressed_video.mp4",
		stack: ["React", "CSS", "Node.js", "Express", "MongoDB", "React Router"],
		description:
			"React Quiz app using Open trivia API with MongoDB to store scores in a leaderboard",
	},
	{
		name: "Nou Design Studio",
		id: "NOU",
		src: "/nou",
		primaryImage: "/mockup_nou.png",
		images: ["/nou/desktop_screenshot.png", "/nou/mobile_screenshot.png", "/nou/contact_screenshot.png"],
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
		name: "Pixel Chat",
		id: "CHAT",
		src: "/chat",
		primaryImage: "/chat/avatar_screenshot.png",
		images: ["/chat/chat.png", "/chat/mobile_screenshot.png", "/chat/avatar_screenshot.png"],
		video: "/nou/nou_screen.mp4",
		stack: ["React", "Tailwind CSS", "Node.js", "Express", "Socket IO", "JWT", "BCRYPT"],
		description: "Real time chat with Socket IO, featuring user Authorization / Authentication"
	},
];

export { data };