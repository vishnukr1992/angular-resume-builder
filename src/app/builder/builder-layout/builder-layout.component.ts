import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MediaMatcher } from "@angular/cdk/layout";
import { BuilderMenuService } from "../service/builder-menu.service";
import { MenuModel } from "../model/menu.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-builder-layout",
  templateUrl: "./builder-layout.component.html",
  styleUrls: ["./builder-layout.component.scss"]
})
export class BuilderLayoutComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  public menuList: MenuModel[] = [];

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef,
              media: MediaMatcher,
              private menuService: BuilderMenuService,
              private route: Router,
              private actRouter: ActivatedRoute
              ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
    this.route.navigate(["board"], {relativeTo: actRouter});
  }

  ngOnInit(): void {
    this.menuList = this.menuService.getMenuList();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

}
