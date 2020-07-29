import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/builder" },
  { path: "builder", loadChildren: () => import("./builder/builder.module").then(m => m.BuilderModule) },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
