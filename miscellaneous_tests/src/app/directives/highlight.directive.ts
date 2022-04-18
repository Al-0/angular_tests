import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') newColor: string = '';

  constructor(private el: ElementRef) { 
    // el.nativeElement.style.backgroundColor = 'pink';
  }

  @HostListener('mouseenter') mouseEntered(){
    this.el.nativeElement.style.backgroundColor = this.newColor || 'yellow';
  }

  @HostListener('mouseleave') mouseLeft(){
    this.el.nativeElement.style.backgroundColor = null;
  }

  @HostListener('focus') Focus(){
    this.el.nativeElement.style.backgroundColor = this.newColor || 'yellow';
  }

  @HostListener('blur') Blur(){
    this.el.nativeElement.style.backgroundColor = null;
  }

}
