import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  
  public productForm!:FormGroup;
  productId:number;

  
  constructor(private fb:FormBuilder, private activatedRoute:ActivatedRoute,
    private service :DataService) { 
    this.productId=this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.service.getProductById(this.productId)
      .subscribe({
        next:data=>{
          this.productForm=this.fb.group({
            id:this.fb.control(data.id),
            nom:this.fb.control(data.nom),
            category:this.fb.control(data.category),
            prix:this.fb.control(data.prix),
          });
        },
        error:err=>{
          console.log(err);
        }
      });
  }

  handelUpdate() {
    this.service.updateProduct(this.productForm.value)
      .subscribe({
        next:value=>{
          alert("update success");
        },
        error:err=>{
          console.log(err);
        }
      });
  }
}
