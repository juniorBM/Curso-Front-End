import { GestaoProjetoListarComponent } from './gestao-projeto-listar.component';
import { GestaoProjetoRoutingModule } from './../gestao-projeto-routing/gestao-projeto.routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GestaoProjetoRoutingModule
  ],
  declarations: [
    GestaoProjetoListarComponent
  ],
  exports: [
    GestaoProjetoListarComponent
  ]
})
export class GestaoProjetoListarModule { }
