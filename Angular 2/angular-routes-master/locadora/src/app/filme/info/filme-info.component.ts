import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Filme } from 'app/filme/filme';
import { FilmeService } from 'app/filme/service/filme.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-filme-info',
  templateUrl: './filme-info.component.html',
  styleUrls: ['./filme-info.component.css']
})

export class FilmeInfoComponent implements OnInit {

  @Input() filme: Filme;

  constructor(
    private filmeService: FilmeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((parametros: ParamMap) => this.filmeService.getFilme(+parametros.get('id')))
      .subscribe(filme => this.filme = filme);
  }

  voltar(): void {
  }

}
