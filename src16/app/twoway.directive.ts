import {
  Input, Output, EventEmitter, Directive,
  HostBinding, HostListener, SimpleChange, OnChanges
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'input[paModel]',
  exportAs: 'paModel'
})
// tslint:disable-next-line:directive-class-suffix
export class PaModel implements OnChanges {

  direction = 'None';

  @Input('paModel')
  modelProperty: string;

  @HostBinding('value')
  fieldValue = '';

  @Output('paModelChange')
  update = new EventEmitter<string>();

  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    const change = changes.modelProperty;
    if (change.currentValue !== this.fieldValue) {
      this.fieldValue = changes.modelProperty.currentValue || '';
      this.direction = 'Model';
    }
  }

  @HostListener('input', ['$event.target.value'])
  updateValue(newValue: string) {
    this.fieldValue = newValue;
    this.update.emit(newValue);
    this.direction = 'Element';
  }
}
