/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TradingCodeService } from './trading-code.service';

describe('Service: TradingCode', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TradingCodeService]
    });
  });

  it('should ...', inject([TradingCodeService], (service: TradingCodeService) => {
    expect(service).toBeTruthy();
  }));
});
