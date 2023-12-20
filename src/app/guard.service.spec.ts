import { TestBed } from '@angular/core/testing';

import { GuardService } from './guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { App1Component } from 'projects/app1/src/app/app.component';


describe('GuardService', () => {
  let service: GuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [GuardService, App1Component]
    });
    service = TestBed.inject(GuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check guard active', () => {
    const res = service.canActivate()
    expect(res).toBeTruthy()
  })
});
