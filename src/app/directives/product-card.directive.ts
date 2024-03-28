import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective {
  @Input() bgColor: string='red';
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor=this.bgColor;
    // this.el.nativeElement.style.borderradius= '10px';
    // this.el.nativeElement.style.boxshadow='0 2px 5px rgba(0, 0, 0, 0.3)';
    this.el.nativeElement.style.backgroundColor='gray'
  }

  @HostListener('mouseover') mouseEnter() {
    // this.el.nativeElement.style.boxshadow='0 4px 8px rgba(0, 0, 0, 0.8)';
    this.el.nativeElement.style.backgroundColor=this.bgColor
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.el.nativeElement.style.boxshadow='0 2px 5px rgba(0, 0, 0, 0.3)';
    this.el.nativeElement.style.backgroundColor='gray'
  }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor=this.bgColor;
  }

}
