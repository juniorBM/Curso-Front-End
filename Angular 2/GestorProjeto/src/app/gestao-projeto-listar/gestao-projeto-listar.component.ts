import { GestaoProjetoService } from './../gestao-projeto-service/gestao-projeto.service';
import { GestaoProjetoModel } from './../gestao-projeto/gestao-projeto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestao-projeto-listar',
  templateUrl: './gestao-projeto-listar.component.html',
  styleUrls: ['./gestao-projeto-listar.component.css']
})
export class GestaoProjetoListarComponent implements OnInit {

  projetos: GestaoProjetoModel[] = [];
  private msg: string;
  constructor(
    private gestaoProjetoService: GestaoProjetoService
  ) { }

  ngOnInit() {
    this.listarProjeto();
  }

  listarProjeto(): void {
    this.gestaoProjetoService.listarProjetos()
      .then((projetos: GestaoProjetoModel[]) => {
        this.projetos = projetos;
        console.log('Projetos: ', this.projetos);
        // console.log('Projetos: ' + this.projetos);
        
      }).catch(err => {
        console.log('Erro ao listar: ' + err);
      });
  }

  deletarProjeto(projeto: GestaoProjetoModel): void {
    this.gestaoProjetoService.deletarProjeto(projeto.id)
      .then((res: string) => {
        this.listarProjeto();
        this.msg = res;
        console.log(res);
        
      }).catch(err => {
        console.log('Erro ao deletar: ' + err);
        
      });
  }

}
