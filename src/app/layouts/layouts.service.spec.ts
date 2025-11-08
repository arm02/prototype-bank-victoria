/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LayoutsService } from './layouts.service';

describe('Service: Layouts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutsService]
    });
  });

  it('should ...', inject([LayoutsService], (service: LayoutsService) => {
    expect(service).toBeTruthy();
  }));
});
