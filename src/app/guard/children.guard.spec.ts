import { TestBed } from '@angular/core/testing';

import { ChildrenGuard } from './children.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('ChildrenGuard', () => {
  let guard: ChildrenGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule],
      providers: [ChildrenGuard,]
    });
    guard = TestBed.inject(ChildrenGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should check child guard active', () => {
    const res = guard.canActivateChild
    expect(res).toBeTruthy()
  })
});
