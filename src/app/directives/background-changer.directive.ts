import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[qdBackgroundChanger]',
})
export class BackgroundChangerDirective {

  @Input() activate: boolean | (() => boolean) = false;
  @Input() color: string = 'orangered';

  @HostBinding('style.background-color')
  get backgroundColor(): string | null {
    const check = typeof this.activate === 'function' ? this.activate() : this.activate;
    return check ? this.color : null;
  }

}
