import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkillListComponent } from "./skill-list/skill-list.component";
import { RouterModule, Routes } from "@angular/router";
import { FrontendService, BackendService, BddService, DevopsService, ProjectService, FormationService } from "./skill.service";

const skillRoutes: Routes = [
	{ path: "skill", component: SkillListComponent },
];

@NgModule({
	declarations: [SkillListComponent],
	imports: [CommonModule, RouterModule.forChild(skillRoutes)],
	providers: [FrontendService, BackendService, BddService, DevopsService, ProjectService, FormationService],
})
export class SkillModule {}
