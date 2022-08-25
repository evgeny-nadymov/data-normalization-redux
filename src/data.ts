// import getRandomFruitsName from "random-fruits-name";
const getRandomFruitsName = require("random-fruits-name");
// import generateRandomAnimalName from "random-animal-name-generator";
const generateRandomAnimalName = require("random-animal-name-generator");

export type User = {
    id: string,
    firstName: string;
    lastName: string;
};
  
export type Template = {
    id: string;
    header: string;
    body: string;
    footer: string;
};
  
export type Status = {
    type: "created" | "scheduled" | "inProgress" | "sent",
    progress?: number;
};
  
export type Campaign = {
	id: string,
	name: string,
	author: User,
	templates: Template[],
	status: Status;
};
  
export const CAMPAIGNS: Campaign[] = [{
		id: "campaign1",
		name: "campaign1",
		author: {
			id: "user1",
			firstName: "firstName1",
			lastName: "lastName1",
		},
		templates: [{
			id: "template1",
			header: "header1",
			body: "body1",
			footer: "footer1",
		}],
		status: {
			type: "created",
		}
    },
    {
		id: "campaign2",
		name: "campaign2",
		author: {
			id: "user1",
			firstName: "firstName1",
			lastName: "lastName1",
		},
		templates: [{
			id: "template1",
			header: "header1",
			body: "body1",
			footer: "footer1",
		}],
		status: {
			type: "created",
		}
    },
    {
		id: "campaign3",
		name: "campaign3",
		author: {
			id: "user2",
			firstName: "firstName2",
			lastName: "lastName2",
		},
		templates: [{
			id: "template1",
			header: "header1",
			body: "body1",
			footer: "footer1",
		}, {
			id: "template2",
			header: "header2",
			body: "body2",
			footer: "footer2",
		}],
		status: {
			type: "created",
		}
    },
];

export function getRandom(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let campaignId = 0;
let userId = 0;

function getRandomUser(): User {
	const animalName = generateRandomAnimalName().split(' ');
	return {
		id: `user${userId++}`,
		firstName: animalName[0],
		lastName: animalName[1],
	};
}

export function getRandomCampaign(author?: User, templates?: Template[]): Campaign {
	return {
		id: `campaign${campaignId++}`,
		name: `${getRandomFruitsName()} Campaign`,
		templates: templates || [],
		author: author || getRandomUser(),
		status: {
			type: 'created',
		},
	};
}

export function getRandomCampaigns(usersCount: number, templatesCount: number, campaignsCount: number): Campaign[] {
	const users: User[] = [];
	const campaigns: Campaign[] = [];

	for (let i = 0; i < usersCount; i++) {
		users.push(getRandomUser());
	}

	for (let i = 0; i < campaignsCount; i++) {
		campaigns.push(getRandomCampaign(users[getRandom(0, usersCount - 1)]));
	}

  	return campaigns;
}

