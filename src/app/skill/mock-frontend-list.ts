import { Skill } from "./skill";

export const FRONTEND: Skill[] = [
	{
		id: 1,
		name: "Languages",
		tags: [
			{
				name: "HTML",
				image: "HTML",
			},
			{
				name: "SCSS",
				image: "SCSS",
			},
			{
				name: "JavaScript",
				image: "JavaScript",
			},
			{
				name: "TypeScript",
				image: "TypeScript",
			},
		],
		created: new Date(),
	},
	{
		id: 2,
		name: "Gestion des états",
		tags: [
			{
				name: "Redux",
				image: "Redux",
			},
			{
				name: "Zustand",
				image: "Zustand",
			},
		],
		created: new Date(),
	},
	{
		id: 3,
		name: "API",
		tags: [
			{
				name: "REST",
				image: "REST",
			},
			{
				name: "GraphQL",
				image: "GraphQL",
			},
			{
				name: "React-Query",
				image: "ReactQuery",
			},
		],
		created: new Date(),
	},
	{
		id: 4,
		name: "Frameworks",
		tags: [
			{
				name: "React",
				image: "React",
			},
			{
				name: "NextJS",
				image: "NextJS",
			},
			{
				name: "Angular",
				image: "Angular",
			},
			{
				name: "VueJS",
				image: "Vue",
			},
		],
		created: new Date(),
	},
	{
		id: 5,
		name: "Authentication",
		tags: [
			{
				name: "Firebase",
				image: "Firebase",
			},
			{
				name: "NextAuth",
				image: "NextAuth",
			},
		],
		created: new Date(),
	},
	{
		id: 6,
		name: "Tests",
		tags: [
			{
				name: "RTL / Jest",
				image: "Jest",
			},
			{
				name: "Jasmine",
				image: "Jasmine",
			},
			{
				name: "Cypress",
				image: "Cypress",
			},
		],
		created: new Date(),
	},
];
