import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Skill, Formation } from "../skill";
import {
	FrontendService,
	BackendService,
	BddService,
	DevopsService,
	ProjectService,
	FormationService,
} from "../skill.service";
import { LOGOS } from "../../shared/logos";

@Component({
	selector: "app-skill-list",
	templateUrl: "./skill-list.component.html",
	styleUrls: ["skill-list.component.scss"],
})
export class SkillListComponent implements OnInit {
	frontendList: Skill[];
	backendList: Skill[];
	bddList: Skill[];
	devopsList: Skill[];
	projectList: Skill[];
	formationList : Formation[];
	logoImages = LOGOS;

	constructor(
		private router: Router,
		private frontendService: FrontendService,
		private backendService: BackendService,
		private bddService: BddService,
		private devopsService: DevopsService,
		private projectService: ProjectService,
		private formationService: FormationService
	) {}

	ngOnInit(): void {
		this.frontendList = this.frontendService.getFrontendList();
		this.backendList = this.backendService.getBackendList();
		this.bddList = this.bddService.getBddList();
		this.devopsList = this.devopsService.getDevopsList();
		this.projectList = this.projectService.getProjectList();
		this.formationList = this.formationService.getFormationList();
	}
}
