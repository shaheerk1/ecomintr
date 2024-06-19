import { TestBed } from '@angular/core/testing';

import { CartItemsDataService } from './cart-items-data.service';

describe('CartItemsDataService', () => {
  let service: CartItemsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartItemsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
