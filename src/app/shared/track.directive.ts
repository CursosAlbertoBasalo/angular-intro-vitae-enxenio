import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[abTrack]',
})
export class TrackDirective {
  @Input('abTrack') param!: string;

  constructor(private el: ElementRef) {}

  @HostListener('mouseover')
  onMouseOver() {
    this.trackIntereaction('Mouse Over');
  }

  @HostListener('click')
  onClick() {
    this.trackIntereaction('Click');
  }

  private trackIntereaction(action: string) {
    console.log(action + ' ' + this.getParam());
  }
  private getParam() {
    if (this.param) return this.param;
    const native = this.el.nativeElement;
    return native.id || native.nave || native.value || native.innerHTML || 'unknown';
  }
}
