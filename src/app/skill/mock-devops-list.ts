import { Skill } from "./skill";

export const DEVOPS: Skill[] = [
	{
		id: 1,
		name: "Cloud",
		tags: [
			{
				name: "Firebase",
				image: "Firebase",
			},
			{
				name: "AWS",
				image: "AWS",
			},
			{
				name: "Azure",
				image: "Azure",
			},
		],
		created: new Date(),
	},
	{
		id: 2,
		name: "Conteneurs",
		tags: [
			{
				name: "Docker",
				image: "Docker",
			},
			{
				name: "Kubernetes",
				image: "Kubernetes",
			},
		],
		created: new Date(),
	},
	{
		id: 3,
		name: "CI/CD",
		tags: [
			{
				name: "GitHub",
				image: "GitHub",
			},
		],
		created: new Date(),
	},
];
