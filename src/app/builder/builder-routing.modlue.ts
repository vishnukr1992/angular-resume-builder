
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BuilderBoardComponent } from "./builder-board/builder-board.component";

const routes: Routes = [
    {path: "", component: BuilderBoardComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class BuilderRoutingModule {

}