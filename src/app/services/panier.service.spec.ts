import { TestBed } from '@angular/core/testing';

import { PanierServiceTs } from './panier.service.js';

describe('PanierServiceTs', () => {
  let service: PanierServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PanierServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
