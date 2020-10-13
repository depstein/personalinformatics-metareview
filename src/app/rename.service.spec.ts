import { TestBed } from '@angular/core/testing';

import { RenameService } from './rename.service';

describe('RenameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenameService = TestBed.get(RenameService);
    expect(service).toBeTruthy();
  });
});
