import { TestBed } from '@angular/core/testing';

import { LoadCovidDataService } from './load-covid-data.service';

describe('LoadCovidDataService', () => {
  let service: LoadCovidDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadCovidDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
