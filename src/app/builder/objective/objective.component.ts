import { Component, OnInit } from "@angular/core";
import {ObjectiveModel} from "../model/objective.model";

@Component({
  selector: "app-objective",
  templateUrl: "./objective.component.html",
  styleUrls: ["./objective.component.scss"]
})
export class ObjectiveComponent implements OnInit {

  public objective: ObjectiveModel = new ObjectiveModel();

  constructor() { }

  ngOnInit(): void {
  }

  public saveObjective() {
    console.log(this.objective);
  }

}
