/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataWrapperService } from './data-wrapper.service';

describe('Service: DataWrapper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataWrapperService]
    });
  });

  it('should ...', inject([DataWrapperService], (service: DataWrapperService) => {
    expect(service).toBeTruthy();
  }));
});
