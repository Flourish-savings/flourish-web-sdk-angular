import { TestBed } from '@angular/core/testing';

import { FlourishWebSdkAngularService } from './flourish-web-sdk-angular.service';

describe('FlourishWebSdkAngularService', () => {
  let service: FlourishWebSdkAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlourishWebSdkAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
