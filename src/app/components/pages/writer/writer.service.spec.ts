/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WriterService } from './writer.service';

describe('Service: Writer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WriterService]
    });
  });

  it('should ...', inject([WriterService], (service: WriterService) => {
    expect(service).toBeTruthy();
  }));
});
