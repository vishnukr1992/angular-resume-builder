import { TestBed } from '@angular/core/testing';

import { BuilderMenuService } from './builder-menu.service';

describe('BuilderMenuService', () => {
  let service: BuilderMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuilderMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
