import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-reactive-form',
  templateUrl: './new-reactive-form.component.html',
  styleUrls: ['./new-reactive-form.component.css']
})
export class NewReactiveFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      brand: ['', [Validators.required, Validators.minLength(10)]],
      qty: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Form Submitted!', this.productForm.value);
      // Handle form submission logic here
    }
  }
}

