
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuilderLayoutComponent } from "./builder-layout/builder-layout.component";
import { BuilderBoardComponent } from "./builder-board/builder-board.component";

const routes: Routes = [
  {
    path: "", component: BuilderLayoutComponent,
    children: [
      { path: "board", component: BuilderBoardComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule {

}
