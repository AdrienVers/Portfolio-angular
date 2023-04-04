import { Injectable } from "@angular/core";
import { FRONTEND } from "./mock-frontend-list";
import { BACKEND } from "./mock-backend-list";
import { BDD } from "./mock-bdd-list";
import { DEVOPS } from "./mock-devops-list";
import { PROJECT } from "./mock-project-list";
import { FORMATION } from "./mock-formation-list";
import { Skill, Formation } from "./skill";

@Injectable()
export class FrontendService {
	getFrontendList(): Skill[] {
		return FRONTEND;
	}
}

@Injectable()
export class BackendService {
	getBackendList(): Skill[] {
		return BACKEND;
	}
}

@Injectable()
export class BddService {
	getBddList(): Skill[] {
		return BDD;
	}
}

@Injectable()
export class DevopsService {
	getDevopsList(): Skill[] {
		return DEVOPS;
	}
}

@Injectable()
export class ProjectService {
	getProjectList(): Skill[] {
		return PROJECT;
	}
}

@Injectable()
export class FormationService {
	getFormationList(): Formation[] {
		return FORMATION;
	}
}

