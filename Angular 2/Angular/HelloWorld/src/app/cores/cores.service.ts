import { Injectable } from '@angular/core';

@Injectable()
export class CoresService {

    private cores: string[];

    constructor(){
        this.cores = ['Blue', 'Green', 'Yellow', 'Red'];
    }

    getCores(): string[] {
        return this.cores;
    }
}
