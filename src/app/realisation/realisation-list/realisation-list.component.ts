import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Realisation } from "../realisation";
import { RealisationService } from "../realisation.service";
import { LOGOS } from "../../shared/logos";

@Component({
	selector: "app-realisation-list",
	templateUrl: "./realisation-list.component.html",
	styleUrls: ["realisation-list.component.scss"],
})
export class RealisationListComponent implements OnInit {
	realisationList: Realisation[];
	logoImages = LOGOS;

	constructor(
		private router: Router,
		private realisationService: RealisationService,
	) {}

	ngOnInit(): void {
		this.realisationList = this.realisationService.getRealisationList();
	}

	goToRealisationDetails(realisation: Realisation) {
		this.router.navigate(["/realisation", realisation.id]);
	}
}
