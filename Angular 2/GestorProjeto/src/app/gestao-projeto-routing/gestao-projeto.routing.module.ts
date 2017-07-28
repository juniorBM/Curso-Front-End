import { NgModule } from '@angular/core';
import { GestaoProjetoListarComponent } from './../gestao-projeto-listar/gestao-projeto-listar.component';
import { GestaoProjetoComponent } from './../gestao-projeto/gestao-projeto.component';
import { RouterModule, Routes } from '@angular/router';

const gestaoProjetoRoutes: Routes = [
    {
        path: 'projetos',
        component: GestaoProjetoListarComponent
    },
    {
        path: 'projeto/save',
        component: GestaoProjetoComponent
    },
    {
        path: 'projeto/alterar/:id',
        component: GestaoProjetoComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(gestaoProjetoRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class GestaoProjetoRoutingModule{}