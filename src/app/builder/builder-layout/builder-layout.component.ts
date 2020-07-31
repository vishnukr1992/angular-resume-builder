import { Component, OnInit, OnDestroy, ChangeDetectorRef } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: "app-builder-layout",
  templateUrl: "./builder-layout.component.html",
  styleUrls: ["./builder-layout.component.scss"]
})
export class BuilderLayoutComponent implements OnInit,  OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

}
