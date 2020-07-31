import { NgModule } from "@angular/core";
import { BuilderRoutingModule } from "./builder-routing.modlue";
import { BuilderLayoutComponent } from "./builder-layout/builder-layout.component";
import { MaterialModule } from "../shared/material/material.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BuilderBoardComponent } from "./builder-board/builder-board.component";

@NgModule({
  declarations: [
    BuilderLayoutComponent,
    BuilderBoardComponent],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: []
})
export class BuilderModule {
}