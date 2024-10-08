import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
  
  
public productForm!:FormGroup;


constructor(private fb:FormBuilder,private service:DataService){}


  ngOnInit(): void {
    this.productForm=this.fb.group(
      {
        nom:this.fb.control(""),
        category:this.fb.control(""),
        prix:this.fb.control("")
      }
    );
  }


  handelSave() {
    let product:Product=this.productForm.value;
    this.service.saveProduct(product)
      .subscribe({
        next:value=>{
          alert(JSON.stringify(value));
        },
        error:err=>{
          console.log(err);
        }
      });
  }

}
