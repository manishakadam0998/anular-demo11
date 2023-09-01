import { Directive, ElementRef, Input ,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectiveExample]'
})
export class DirectiveExampleDirective {

  constructor(private el:ElementRef,private ren:Renderer2) { 
  console.log('el',el);
  //   this.el.nativeElement.innerHTML="Custom Directive Example";
  //   this.el.nativeElement.style.color="white";
  //   this.el.nativeElement.style.backgroundColor="black";
   
   this.ren.setStyle(this.el.nativeElement,'color','white')
this.ren.setStyle(this.el.nativeElement,'backgroundColor','red')

}}
