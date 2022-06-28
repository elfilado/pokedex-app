import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  initialColor: string = '#f5f5f5';
  defaultColor: string = '#009688';
  defaultHeight: number = 190;

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
  }

  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder(this.initialColor);
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }

  private setBorder(color: string){
    this.el.nativeElement.style.border = `outset 4px ${color}`;
  }

}
