import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ProductComponent} from './component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {PaAttrDirective} from './attr.directive';
import {PaModelDirective} from './twoway.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [ProductComponent, AppComponent, PaAttrDirective, PaModelDirective],
  bootstrap: [ProductComponent]
})
export class AppModule {
}
