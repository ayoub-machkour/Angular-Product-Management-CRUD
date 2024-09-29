import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listLien:Array<any>=[
    {nom:"product",route:"/products",icon:"bi-arrow-down-up"},
    {nom:"newProduct",route:"/newProduct",icon:"bi-plus-circle"},
  ];


  currentLien:any = this.listLien[0];



  SetCurrentLien(lien:any){
    this.currentLien = lien;
  }


}

