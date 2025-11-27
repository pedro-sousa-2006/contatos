import { TestBed } from '@angular/core/testing';

import { Listarservice } from './listarservice';

describe('Listarservice', () => {
  let service: Listarservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Listarservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
