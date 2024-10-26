import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { DataService } from '../data.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  products:Product[]=[];
  constructor(private service: DataService)
  {

  }
  
  ngOnInit(): void {
    this.service.fetchAllProducts().subscribe((data)=>{
      this.products=data

    })
  }

}
