
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuilderLayoutComponent } from "./builder-layout/builder-layout.component";
import { BuilderBoardComponent } from "./builder-board/builder-board.component";
import { ObjectiveComponent } from "./objective/objective.component";
import { PersonalDetailsComponent } from "./personal-details/personal-details.component";

const routes: Routes = [
  {
    path: "", component: BuilderLayoutComponent,
    children: [
      { path: "board", component: BuilderBoardComponent },
      { path: "objective", component: ObjectiveComponent },
      { path: "personal-details", component: PersonalDetailsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule {

}
