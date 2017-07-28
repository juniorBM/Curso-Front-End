import { Component, OnInit } from '@angular/core';
import { GestaoProjetoModel } from './gestao-projeto.model';
import { GestaoProjetoService } from './../gestao-projeto-service/gestao-projeto.service';
import { ActivatedRoute, Params } from "@angular/router";
import {MDCTextfield, MDCTextfieldFoundation} from '@material/textfield';


@Component({
  selector: 'app-gestao-projeto',
  templateUrl: './gestao-projeto.component.html',
  styleUrls: ['./gestao-projeto.component.css']
})
export class GestaoProjetoComponent implements OnInit {
  private gp: GestaoProjetoModel;
  private promise: any;
  private alterar: boolean = false;

  private msg: string;
  constructor(
    // private textfield = new MDCTextfield(document.querySelector('.mdc-textfield')), 
    private route: ActivatedRoute,
    private gestaoProjetoService: GestaoProjetoService) {

      
   }

  ngOnInit() {

    this.gp = new GestaoProjetoModel(0, '', '');

      this.route.params.forEach((params: Params) => {
        let id: number = +params['id'];

        console.log(params);

        if (id > 0) {
          this.alterar = true;
          this.gestaoProjetoService.buscarPorId(id)
            .then((projeto: GestaoProjetoModel) => {
              console.log(projeto);
              this.gp = projeto;
              
            });
          }
      });
  }

  onSubmit(): void {
    if (this.alterar) {
      this.alterarProjeto();
    }else {
      this.novoProjeto();
    }
  }

  novoProjeto(): void {
    console.log(this.gp);
    this.gestaoProjetoService.novoProjeto(this.gp)
      .then((res) => {
        this.msg = res;
      }, (error) => {
        console.log(error._body);
        
      })
    // console.log(this.promise);
    // this.msg = this.promise;

  }

  alterarProjeto(): void {
    console.log(this.gp);
    this.promise = this.gestaoProjetoService.alterarProjeto(this.gp)
      .then((res: string) => {
        this.msg = res;
      }, (error) => {
        console.log(error._body);
        
      })
    
  }

}
