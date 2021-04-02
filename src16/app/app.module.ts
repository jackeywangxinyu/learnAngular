import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ProductComponent} from './component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaAttrDirective} from '../directives/attr.directive';
import {PaModel} from './twoway.directive';
import {PaStructureDirective} from '../directives/structure.directive';
import {PaIteratorDirective} from '../directives/iterator.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ProductComponent, PaAttrDirective, PaModel, PaStructureDirective, PaIteratorDirective],
  bootstrap: [ProductComponent]
})
export class AppModule {
}
