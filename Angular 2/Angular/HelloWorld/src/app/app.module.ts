import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoresComponent } from './cores/cores.component';
import { CorDirective } from './cores/cores.directive';
import { CoresService } from './cores/cores.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';




@NgModule({
  declarations: [
    AppComponent,
    CoresComponent,
    CorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
