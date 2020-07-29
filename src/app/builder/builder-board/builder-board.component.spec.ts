import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderBoardComponent } from './builder-board.component';

describe('BuilderBoardComponent', () => {
  let component: BuilderBoardComponent;
  let fixture: ComponentFixture<BuilderBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuilderBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
