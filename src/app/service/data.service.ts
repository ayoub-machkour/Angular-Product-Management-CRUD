import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class DataService {

  constructor(private http:HttpClient) { }

  getProduct():Observable<Array<Product>>{
      return  this.http.get<Array<Product>>("http://localhost:5555/products");
  }

  getProductById(id:number):Observable<Product>{
    return  this.http.get<Product>("http://localhost:5555/products/"+id);
 }

  deleteProduct(prd: Product):Observable<any> {
    return this.http.delete("http://localhost:5555/products/"+prd.id)
  }
  
  saveProduct(prd: Product):Observable<Product> {
    return  this.http.post<Product>("http://localhost:5555/products/",prd);
  }

  updateProduct(prd:Product):Observable<Product>{
    return this.http.put<Product>("http://localhost:5555/products/"+prd.id,prd);
  }
}
