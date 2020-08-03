import { NgModule } from "@angular/core";
import { BuilderRoutingModule } from "./builder-routing.modlue";
import { BuilderLayoutComponent } from "./builder-layout/builder-layout.component";
import { MaterialModule } from "../shared/material/material.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BuilderBoardComponent } from "./builder-board/builder-board.component";
import { BuilderMenuService } from "./service/builder-menu.service";
import { ObjectiveComponent } from './objective/objective.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

@NgModule({
  declarations: [
    BuilderLayoutComponent,
    BuilderBoardComponent,
    ObjectiveComponent,
    PersonalDetailsComponent],
  imports: [
    CommonModule,
    BuilderRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BuilderMenuService],
  bootstrap: []
})
export class BuilderModule {
}