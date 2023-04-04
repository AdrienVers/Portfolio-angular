import { Skill } from "./skill";

export const BACKEND: Skill[] = [
	{
		id: 1,
		name: "Languages",
		tags: [
			{
				name: "NodeJS",
				image: "NodeJS",
			},
			{
				name: "C++ / C#",
				image: "Csharp",
			},
		],
		created: new Date(),
	},
	{
		id: 2,
		name: "Frameworks",
		tags: [
			{
				name: "Express",
				image: "Express",
			},
			{
				name: "ASP.NET",
				image: "ASP",
			},
		],
		created: new Date(),
	},
];
