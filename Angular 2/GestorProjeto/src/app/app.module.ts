import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { GestaoProjetoService } from './gestao-projeto-service/gestao-projeto.service';
import { GestaoProjetoListarModule } from './gestao-projeto-listar/gestao-projeto-listar.module';
import { GestaoProjetoComponent } from './gestao-projeto/gestao-projeto.component';
import { GestaoProjetoModule } from './gestao-projeto/gestao-projeto.module';
import { GestaoProjetoListarComponent } from './gestao-projeto-listar/gestao-projeto-listar.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
    // GestaoProjetoComponent,
    // GestaoProjetoListarComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GestaoProjetoModule,
    GestaoProjetoListarModule,
    HttpModule
    // FormsModule
  ],
  providers: [GestaoProjetoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
