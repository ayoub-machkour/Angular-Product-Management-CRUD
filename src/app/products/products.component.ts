import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { DataService } from '../service/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent implements OnInit {

products:Array<Product>=[]  

constructor(private service:DataService , private router:Router) {}

getProduct(){
  this.service.getProduct()
    .subscribe(
      {
        next:data=>{
          this.products=data;
        },
        error:err=>{
          console.log(err);
        }
      }
    );
}

ngOnInit(): void {
  this.getProduct();
}


handleDeleteProduct(prd: Product) {
  this.service.deleteProduct(prd)
        .subscribe({
              next:value=>{
                this.products=this.products.filter(p=>p.id!=prd.id);
              },
              error:err=>{
                console.log(err);
              }
  });
}

handleUpdateProduct(prd: Product) {
  this.router.navigateByUrl("/editProduct/"+prd.id);
  }
}
