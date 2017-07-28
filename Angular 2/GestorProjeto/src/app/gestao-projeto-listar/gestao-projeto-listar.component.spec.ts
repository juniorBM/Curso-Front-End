import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoProjetoListarComponent } from './gestao-projeto-listar.component';

describe('GestaoProjetoListarComponent', () => {
  let component: GestaoProjetoListarComponent;
  let fixture: ComponentFixture<GestaoProjetoListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestaoProjetoListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoProjetoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
