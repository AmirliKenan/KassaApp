import { TestBed } from '@angular/core/testing';

import { KassaService } from './kassa.service';

describe('KassaService', () => {
  let service: KassaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KassaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
