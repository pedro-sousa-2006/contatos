import { TestBed } from '@angular/core/testing';

import { Alterar } from './alterar';

describe('Alterar', () => {
  let service: Alterar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Alterar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
