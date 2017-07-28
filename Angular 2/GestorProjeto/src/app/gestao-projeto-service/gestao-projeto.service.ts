import { GestaoProjetoModel } from './../gestao-projeto/gestao-projeto.model';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GestaoProjetoService {
  private url: string;
  private gp: GestaoProjetoModel;
  private headers: Headers = new Headers({'Content-Type': 'application/json'});

  private response: any;
  constructor(
    private http: Http
  ) {
      // this.url = 'http://192.168.0.101:8000/projetos/';
      this.url = 'http://192.168.52.44:8000/projetos/';
   }

  private handleError(err: any): Promise<any> {
        console.log('Erro: ', err);
        return Promise.reject(err.message || err);
    }

  // novoProjeto(gp: GestaoProjetoModel):  Promise<string> {
  //   return this.http
  //     .post(this.url + 'novo/projeto/', JSON.stringify(gp), {headers: this.headers})
  //     .toPromise()
  //     .then((response: Response) => response.json().data as string)
  //     .catch(this.handleError);
  // }

  novoProjeto(gp: GestaoProjetoModel):  Promise<string> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'novo/projeto/', JSON.stringify(gp), {headers:this.headers})
        .subscribe(data => {
          resolve(data.json());
        }, error => {
          reject(error);
        });
    });
  }

  // listarProjetos(): Promise<GestaoProjetoModel[]> {
    
  //   return this.http
  //     .get(this.url + 'listar/projetos/')
  //     .toPromise()
  //     .then((response: Response) => response.json().data =>{})
  //     .catch(this.handleError);
      
  //     // console.log(res);
  // }

  listarProjetos(){
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'listar/projetos/')
        .subscribe(data => {
          resolve(data.json());
          // console.log(data);s
        }, error => {
          reject(error);
        });
    });
  }

  buscarPorId(id: number) {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + 'buscar/projeto/' + id)
        .subscribe(data => {
          resolve(data.json())
        }, error => {
          reject(error);
        });
    });
  }

  deletarProjeto(id: number) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + 'deletar/projeto/' + id, {headers:this.headers})
        .subscribe(data => {
          resolve(data.json());
        }, error => {
          reject(error);
        });
    });
  }

  alterarProjeto(projeto: GestaoProjetoModel) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + 'alterar/projeto/', JSON.stringify(projeto), {headers: this.headers})
        .subscribe(data => {
          resolve(data.json());
        }, error => {
          reject(error);
        });
    });
  }
}
