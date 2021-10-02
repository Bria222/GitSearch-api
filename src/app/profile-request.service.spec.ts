// import { TestBed } from '@angular/core/testing';

// import { ProfileRequestService } from './profile-request.service';

// describe('ProfileRequestService', () => {
//   beforeEach(() => TestBed.configureTestingModule({}));

//   it('should be created', () => {
//     const service: ProfileRequestService = TestBed.get(ProfileRequestService);
//     expect(service).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';

import { ProfileRequestService } from './profile-request.service';

describe('GithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileRequestService = TestBed.get(ProfileRequestService);
    expect(service).toBeTruthy();
  });
});
