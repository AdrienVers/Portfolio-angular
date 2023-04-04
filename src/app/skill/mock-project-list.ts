import { Skill } from "./skill";

export const PROJECT: Skill[] = [
	{
		id: 1,
		name: "Méthodes",
		tags: [
			{
				name: "Scrum",
				image: "Scrum",
			},
			{
				name: "Kanban",
				image: "Kanban",
			},
			{
				name: "MASK",
				image: "MASK",
			},
		],
		created: new Date(),
	},
	{
		id: 2,
		name: "Utilisateur",
		tags: [
			{
				name: "UI / UX",
				image: "UX",
			},
			{
				name: "SEO",
				image: "SEO",
			},
		],
		created: new Date(),
	},
	{
		id: 3,
		name: "Outils",
		tags: [
			{
				name: "Jira Software",
				image: "Jira",
			},
		],
		created: new Date(),
	},
];
