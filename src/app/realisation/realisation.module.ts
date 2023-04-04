import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RealisationListComponent } from "./realisation-list/realisation-list.component";
import { RouterModule, Routes } from "@angular/router";
import { RealisationService } from "./realisation.service";

const realisationRoutes: Routes = [
	{ path: "realisation", component: RealisationListComponent },
];

@NgModule({
	declarations: [RealisationListComponent],
	imports: [CommonModule, RouterModule.forChild(realisationRoutes)],
	providers: [RealisationService],
})
export class RealisationModule {}
