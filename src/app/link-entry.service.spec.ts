import { TestBed } from '@angular/core/testing';

import { LinkEntryService } from './link-entry.service';

describe('LinkEntryService', () => {
  let service: LinkEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
