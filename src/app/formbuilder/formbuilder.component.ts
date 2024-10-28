import { Component } from '@angular/core';
import { FormArray,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {
  constructor(private formBuilder: FormBuilder){}

  productForm = this.formBuilder.group({
    productId:[,[Validators.required, Validators.minLength(8)]],
    brand :[''],
    description : this.formBuilder.group({
      age:[0],
      seasons:['']
    }),
    qty:[0],
    price:[0],
    suppliers: this.formBuilder.array([this.formBuilder.control('')]),
  })
  onSubmit(){
    console.log(this.productForm)
    console.log(this.productForm.value);
    console.log(this.productForm.controls['productId'].value);
    console.log(this.productForm.controls['description'].controls['age'].value);
    console.log(this.productForm.controls['description'].controls['seasons'].value);
    console.log(this.productForm.controls['suppliers'].controls[0].value);
       
  }
  get suppliers (){
    return this.productForm.get('suppliers') as FormArray
  }
  addNewSupplier(){
    console.warn(this.suppliers)
    this.suppliers.push(this.formBuilder.control(''))
  }
}
