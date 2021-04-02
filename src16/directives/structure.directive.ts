import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[paIf]'
})
export class PaStructureDirective implements OnChanges {


  @Input()
  paIf: boolean;

  constructor(private container: ViewContainerRef, private template: TemplateRef<object>) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes.paIf;
    if (!change) {
      console.error('there is no change in paIf directive');
      return;
    }
    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }
  }

}
