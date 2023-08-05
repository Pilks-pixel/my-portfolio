import questions from '../public/quiz/questions_screenshot.png'
import mobile from '../public/quiz/mobile_screenshot.png'
import leaderboard from '../public/quiz/leaderboard_screenshot.png'
import desktop  from '../public/nou/desktop_screenshot.png'
import mobileNou from '../public/nou/mobile_screenshot.png'
import contact from '../public/nou/contact_screenshot.png'
import chat from '../public/chat/chat.png'
import mobileChat from '../public/chat/mobile_screenshot.png'
import avatar from '../public/chat/avatar_screenshot.png'

import mockupQuiz from '../public/mock_quiz.png'
import mockupNou from '../public/mockup_nou.png'




const data = [
	{
		name: "Quiz Night",
		id: "QUIZ",
		src: "/quiz",
		primaryImage: mockupQuiz,
		images: [questions, mobile, leaderboard],
		
		video: "/quiz/compressed_video.mp4",
		stack: ["React", "CSS", "Node.js", "Express", "MongoDB", "React Router"],
		description:
			"React Quiz app using Open trivia API with MongoDB to store scores in a leaderboard",
	},
	{
		name: "Nou Design Studio",
		id: "NOU",
		src: "/nou",
		primaryImage: mockupNou,
		images: [desktop, mobileNou, contact],
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
		primaryImage: avatar,
		images: [chat, mobileChat, avatar],
		video: "/chat/chat_video.mp4",
		stack: ["React", "Tailwind CSS", "Node.js", "Express", "Socket IO", "JWT", "BCRYPT"],
		description: "Real time chat with Socket IO, featuring user Authorization / Authentication"
	},
];

export { data };