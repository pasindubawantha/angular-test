import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector:'[appMyHighlight]'
})
export class MyHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef){// Adding private or public to parameter will automaticaly make it a property of the class

 }

 ngOnInit() {
  this.elementRef.nativeElement.style['background-color'] = 'yellow'
 }

}
