import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[parallax]'
})
export class ParallaxDirective {

  @Input('cssKeys') keys: ParallaxConfig[];
  initialTop: number = 0;
  hostElement;

  constructor(private ref: ElementRef) {
    this.initialTop = this.ref.nativeElement.getBoundingClientRect().top;
    this.hostElement = this.ref.nativeElement;
  }

  @HostListener("window:scroll", ["$event"]) onWindowScroll(event){
    this.keys.forEach(key => {
      let resultVal: string;
      let calcVal: number;
      let scrollVal = event.path[1].scrollY;
      calcVal = scrollVal * +key.ratio + (key.init ? key.init : 0);
      if(key.max) calcVal > key.max ? calcVal=key.max : null;
      if(key.min) calcVal < key.min ? calcVal=key.min : null;
      if(key.function) {
        resultVal = key.function + '(' + calcVal + key.unit + ')';
      } else {
        resultVal = calcVal + key.unit;
      }
      this.hostElement.style[key.property] = resultVal;
    });
  }

}

export interface ParallaxConfig {
  property: string;
  function?: string;
  init?: number;
  min?: number;
  max?: number;
  unit?: string;
  ratio: number;
}