/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FullAuthGuardService } from './FullAuthGuard.service';

describe('Service: FullAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FullAuthGuardService]
    });
  });

  it('should ...', inject([FullAuthGuardService], (service: FullAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
