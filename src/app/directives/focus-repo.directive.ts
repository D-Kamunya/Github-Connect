import { Directive, ElementRef,HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFocusRepo]'
})
export class FocusRepoDirective {


  constructor(private elem:ElementRef,private renderer: Renderer2) { 
   

  }
  @HostListener('mouseenter') onMouseEnter() {
    let purple='purple-gradient'
    let bluegradient='blue-gradient'
    this.renderer.removeClass(this.elem.nativeElement, bluegradient);
    this.renderer.addClass(this.elem.nativeElement, purple);
  }
  @HostListener('mouseleave') onMouseLeave(){
    let purple='purple-gradient'
    let bluegradient='blue-gradient'
    this.renderer.removeClass(this.elem.nativeElement, purple);
    this.renderer.addClass(this.elem.nativeElement, bluegradient);
  }



}
