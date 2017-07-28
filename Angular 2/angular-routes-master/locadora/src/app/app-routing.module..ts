import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Filme
import { FilmeListaComponent } from 'app/filme/lista/filme-lista.component';
import { FilmeInfoComponent } from 'app/filme/info/filme-info.component';

// Jogo
import { JogoListaComponent } from 'app/jogo/lista/jogo-lista.component';
import { JogoInfoComponent } from 'app/jogo/info/jogo-info.component';

const routes: Routes = [
      {
        path: 'filme',
        component: FilmeListaComponent
      },
      {
        path: 'filme/:id', 
        component: FilmeInfoComponent
      },
      {
        path: 'jogo',
        component: JogoListaComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'

      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }

    ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
