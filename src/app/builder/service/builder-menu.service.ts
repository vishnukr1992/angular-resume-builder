import { Injectable } from "@angular/core";
import { MenuModel } from "../model/menu.model";

const menuList: MenuModel[] = [{
  route: "board",
  name: "DashBoard"
}, {
  route: "objective",
  name: "Object"
}, {
  route: "personal-details",
  name: "Personal Details"
}];

@Injectable({
  providedIn: "root"
})
export class BuilderMenuService {

  constructor() { }
  public getMenuList(): MenuModel[] {

    return menuList;

  }

}
