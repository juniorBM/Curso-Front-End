import { Component } from '@angular/core';
import { CoresService } from './cores.service';

@Component({
    selector: 'app-cores',
    templateUrl: './cores.component.html',
    styleUrls: ['./cores.component.css']
})

export class CoresComponent {
    cores: string[];
    corSelecionada: string;

    constructor(public coresService: CoresService){
        this.cores = this.coresService.getCores();
    }
}