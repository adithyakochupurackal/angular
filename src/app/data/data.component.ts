import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  products:Product[]=[];
  constructor(private service:DataService){

  }
  ngOnInit():void{
    this.getProducts();
  }
  public getProducts():void{
    this.products=this.service.getProducts();
  }

  // productId: number= 1456
  // description: String = "S24"
  // brand: String = "Samsung"
  // price:number = 90000
  // isAvailable : boolean = true
   orderedQty : number =0
   isMember : boolean = true
  freeshipping : String = "green"
  
  //  product: any[] = [
  //   {
  //     productId: 1456,
  //     description: "S24",
  //     brand: "Samsung",
  //     price: 90000,
  //     isAvailable: true,
  //     freeshipping: "green",
  //   },
  //   {
  //     productId: 1457,
  //     description: "iPhone 14",
  //     brand: "Apple",
  //     price: 100000,
  //     isAvailable: true,
  //     freeshipping: "red",
  //   },
  //   {
  //     productId: 1458,
  //     description: "Pixel 7",
  //     brand: "Google",
  //     price: 80000,
  //     isAvailable: false,
  //     freeshipping: "green",
  //   },
  //   {
  //     productId: 1459,
  //     description: "OnePlus 10",
  //     brand: "OnePlus",
  //     price: 60000,
  //     isAvailable: true,
  //     freeshipping: "red",
  //   },
  //   {
  //     productId: 1460,
  //     description: "Xiaomi Mi 11",
  //     brand: "Xiaomi",
  //     price: 50000,
  //     isAvailable: true,
  //     freeshipping: "green",
  //   },
  //   {
  //     productId: 1461,
  //     description: "Nokia G20",
  //     brand: "Nokia",
  //     price: 15000,
  //     isAvailable: true,
  //     freeshipping: "green",
  //   },
  //   {
  //     productId: 1462,
  //     description: "Sony Xperia 1",
  //     brand: "Sony",
  //     price: 95000,
  //     isAvailable: false,
  //     freeshipping: "red",
  //   },
  //   {
  //     productId: 1463,
  //     description: "Motorola Edge 20",
  //     brand: "Motorola",
  //     price: 30000,
  //     isAvailable: true,
  //     freeshipping: "green",
  //   },
  //   {
  //     productId: 1464,
  //     description: "Realme GT",
  //     brand: "Realme",
  //     price: 40000,
  //     isAvailable: true,
  //     freeshipping: "red",
  //   },
  //   {
  //     productId: 1465,
  //     description: "Huawei P50",
  //     brand: "Huawei",
  //     price: 70000,
  //     isAvailable: true,
  //     freeshipping: "green",
  //   },
  // ];


  public placeOrder() : void{
    console.log("order received is "+ this.orderedQty)
  }
  public isButtonEnabled() : boolean{
   return this.orderedQty > 0
  }

  //placeString : String = "order received"


}
