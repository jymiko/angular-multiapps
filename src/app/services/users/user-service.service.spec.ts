import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserServiceService } from './user-service.service';

describe('UserServiceService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserServiceService]
    });
  });

  it('should be created', () => {
    const service:UserServiceService = TestBed.get(UserServiceService);
    expect(service.GetUserList).toBeTruthy();
  });

  it('should get user list data', async() => {
    const httpClient = TestBed.inject(UserServiceService)
    const result = await httpClient.GetUserList()
    expect(result).not.toBeNull()
  })

  it('should return catch', waitForAsync(inject([UserServiceService], (UserServiceService:UserServiceService) => {
    UserServiceService.GetUserList().subscribe(result => expect(result.length).toBeGreaterThan(0))
  })))
});
