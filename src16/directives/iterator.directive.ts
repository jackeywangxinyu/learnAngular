import {
  ChangeDetectorRef,
  DefaultIterableDiffer,
  Directive,
  DoCheck,
  Input, IterableDiffer, IterableDiffers,
  OnChanges,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

class PaIteratorContext {
  constructor(public $implicit: any, public index: number, total: number) {
  }

}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[paForOf]'
})

export class PaIteratorDirective implements OnInit, OnChanges, DoCheck {
  private differ: DefaultIterableDiffer<any>;

  @Input('paForOf')
  dataSource: any[];

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<object>,
              private differs: IterableDiffers,
              private changeDetector: ChangeDetectorRef
              ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.differ = this.differs.find(this.dataSource).create() as DefaultIterableDiffer<any>;
    // this.updateContent();
  }

  ngDoCheck(): void {
    console.log('doCheck');
    const changes = this.differ.diff(this.dataSource);
    if (changes !== null) {
      console.log('ngCheck called, changed detected');
      changes.forEachAddedItem(addition => {
        console.log(addition);
        this.container.createEmbeddedView(this.template, new PaIteratorContext(addition.item, addition.currentIndex, changes.length));
      });
    }
  }

  private updateContent() {
    this.container.clear();
    this.dataSource.forEach((source, i) => {
      this.container.createEmbeddedView(this.template, new PaIteratorContext(source, i, this.dataSource.length));
    });
  }
}
