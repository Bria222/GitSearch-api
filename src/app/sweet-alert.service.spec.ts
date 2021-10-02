import { TestBed } from '@angular/core/testing';

import { SweetAlertService } from './sweet-alert.service';

describe('SweetAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SweetAlertService = TestBed.get(SweetAlertService);
    expect(service).toBeTruthy();
  });
});
