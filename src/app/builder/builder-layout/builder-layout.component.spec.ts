import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BuilderLayoutComponent } from "./builder-layout.component";

describe("BuilderLayoutComponent", () => {
  let component: BuilderLayoutComponent;
  let fixture: ComponentFixture<BuilderLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
