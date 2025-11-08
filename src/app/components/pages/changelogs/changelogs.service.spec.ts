/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangelogsService } from './changelogs.service';

describe('Service: Changelogs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangelogsService]
    });
  });

  it('should ...', inject([ChangelogsService], (service: ChangelogsService) => {
    expect(service).toBeTruthy();
  }));
});
