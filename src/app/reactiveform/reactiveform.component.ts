import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  productForm: FormGroup;

  constructor() {
    this.productForm = new FormGroup({
      productId: new FormControl(0, [
        Validators.required,
        Validators.min(1000),
        Validators.max(9999)
      ]),
      brand: new FormControl(''),
      description: new FormControl(''),
      qty: new FormControl(0),
      price: new FormControl(0,)
    });
  }

  onSubmit() {
   
    console.warn(this.productForm)
    console.warn(this.productForm.value);
    console.warn(this.productForm.controls["price"]);
    
    
  }
}
