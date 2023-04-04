import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SkillListComponent } from "./skill/skill-list/skill-list.component";

const routes: Routes = [
	{ path: "skill", component: SkillListComponent },
	{ path: "", redirectTo: "realisation", pathMatch: "full" },
	{ path: "**", component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
