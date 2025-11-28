import { TestBed } from '@angular/core/testing';

import { Deletar } from './deletar';

describe('Deletar', () => {
  let service: Deletar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Deletar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
