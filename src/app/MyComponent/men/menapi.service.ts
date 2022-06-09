import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MenapiService {

  constructor(private http : HttpClient) { 
    
  }
  data:any=[];
  wish:any=[];
  total=0;
  getdata()
    {
      this.data.sort(function(x:any,y:any) {
        return x-y
    });;
    //  console.log(this.data)
      return this.data;
    }
    savedata(input:number)
    {
      this.data.push(input);
      
    }
    //wish list/
    savewish(input:number)
    {
      this.wish.push(input);
      
    }
    getwish()
    {
      this.wish.sort(function(x:any,y:any) {
        return x-y
    });;
    //  console.log(this.data)
      return this.wish;
    }
}
