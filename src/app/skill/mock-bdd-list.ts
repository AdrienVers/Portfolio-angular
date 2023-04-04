import { Skill } from "./skill";

export const BDD: Skill[] = [
	{
		id: 1,
		name: "ORM",
		tags: [
			{
				name: "Mongoose",
				image: "Mongoose",
			},
			{
				name: "Prisma",
				image: "Prisma",
			},
		],
		created: new Date(),
	},
	{
		id: 2,
		name: "SQL",
		tags: [
			{
				name: "MySQL",
				image: "MySQL",
			},
			{
				name: "PostgreSQL",
				image: "PostgreSQL",
			},
		],
		created: new Date(),
	},
	{
		id: 3,
		name: "NoSQL",
		tags: [
			{
				name: "MongoDB",
				image: "MongoDB",
			},
			{
				name: "Firestore",
				image: "Firebase",
			},
		],
		created: new Date(),
	},
];
