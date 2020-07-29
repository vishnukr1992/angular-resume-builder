import { NgModule } from "@angular/core";
import {BuilderRoutingModule} from "./builder-routing.modlue";
import { BuilderBoardComponent } from "./builder-board/builder-board.component";

@NgModule({
    declarations: [
    BuilderBoardComponent],
    imports: [
        BuilderRoutingModule
    ],
    providers: [],
    bootstrap: []
  })
export class BuilderModule {
}