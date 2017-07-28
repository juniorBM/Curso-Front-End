import { CoresService } from './cores.service';
import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector: '[appCor]'
})


export class CorDirective{
    constructor(public elementRef: ElementRef,
                public coresService: CoresService){
        console.log('Funçou a diretiva customizada!!!');
        console.log(this.coresService.getCores());
        
    }

    @HostListener('mouseenter')  onMouseEnter() {
        console.log('Passou o mouse!');
        this.elementRef.nativeElement.style.backgroundColor = 'red';
        this.elementRef.nativeElement.style.color = 'white';
    }
    @HostListener('mouseleave')  onMouseLeave() {
        console.log('Passou o mouse!');
        this.elementRef.nativeElement.style.backgroundColor = '';
        this.elementRef.nativeElement.style.color = '';
    }
}