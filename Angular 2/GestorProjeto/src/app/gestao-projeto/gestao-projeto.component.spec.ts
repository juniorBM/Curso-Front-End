import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoProjetoComponent } from './gestao-projeto.component';

describe('GestaoProjetoComponent', () => {
  let component: GestaoProjetoComponent;
  let fixture: ComponentFixture<GestaoProjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoProjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
