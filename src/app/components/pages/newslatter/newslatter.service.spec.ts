/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewslatterService } from './newslatter.service';

describe('Service: Newslatter', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewslatterService]
    });
  });

  it('should ...', inject([NewslatterService], (service: NewslatterService) => {
    expect(service).toBeTruthy();
  }));
});
