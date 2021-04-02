import {
  Attribute,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Product} from './product.model';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[pa-attr]'
})
export class PaAttrDirective implements OnChanges {
  @Input('pa-attr')
  @HostBinding('class')
  bgClass: string;
  @Input('pa-product')
  product: Product;
  @Output('pa-category')
  click = new EventEmitter<string>();

  @HostListener('click')
  triggerCustomEvent() {
    if (this.product !== null) {
      this.click.emit(this.product.category);
    }
  }

  constructor(private ele: ElementRef) {
  }


  ngOnChanges(changes: SimpleChanges): void {
    const change = changes.bgClass;
    console.log(JSON.stringify(change));
    const classList = this.ele.nativeElement.classList;

    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }
}
