import { TestBed, inject } from '@angular/core/testing';

import { GestaoProjetoServiceService } from './gestao-projeto-service.service';

describe('GestaoProjetoServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestaoProjetoServiceService]
    });
  });

  it('should be created', inject([GestaoProjetoServiceService], (service: GestaoProjetoServiceService) => {
    expect(service).toBeTruthy();
  }));
});
