import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector:'[sai]'//directive name
})

export class CustomDirective {
    constructor(e: ElementRef) {
        e.nativeElement.style.background="skyblue";
        e.nativeElement.style.color='black';
        e.nativeElement.style.padding='10px';
        e.nativeElement.style.borderRadius="10px";
        e.nativeElement.style.border="1px solid black"
    }

}