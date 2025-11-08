/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutosaveService } from './autosave.service';

describe('Service: Autosave', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutosaveService]
    });
  });

  it('should ...', inject([AutosaveService], (service: AutosaveService) => {
    expect(service).toBeTruthy();
  }));
});
