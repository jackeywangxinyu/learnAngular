import {ApplicationRef, Component, OnInit} from '@angular/core';
import {NgForm, FormGroup} from '@angular/forms';
import {Model} from './repository.model';
import {Product} from './product.model';
import {ProductFormGroup, ProductFormControl} from './form.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html'
})
export class ProductComponent implements OnInit{
  model: Model = new Model();
  formGroup: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();

  formSubmitted = false;

  showTable: any;
  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  ngOnInit(): void {
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  submitForm() {
    const newP = JSON.parse(JSON.stringify(this.newProduct));
    console.log(this.newProduct);
    console.log(newP);
    this.addProduct(newP);
  }
}
