import {Directive, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[paModel]',
  exportAs: 'paModel'
})

export class PaModelDirective implements OnChanges {
  @Input('paModel')
  modelProperty: string;
  @HostBinding('value')
  fieldValue = '';

  direction = 'None';

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes.modelProperty;
    console.log(change);
    console.log(changes);
    if (!change.isFirstChange() && change.currentValue !== this.fieldValue) {
      this.fieldValue = change.currentValue;
      // this.direction = 'From Model to Element';
    }
  }

  @HostListener('input', ['$event.target.value'])
  listeningInput(event: string) {
    console.log(event);
    this.modelChange.emit(event);
    this.direction = 'From Element to Model';
  }

  @Output('paModelChange')
  modelChange: EventEmitter<string> = new EventEmitter();
}
