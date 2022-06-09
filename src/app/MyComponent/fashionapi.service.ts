import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FashionapiService {
  

  constructor(private http : HttpClient) { }
  url="assets/myapi.json";
  getdata()
    {
      return this.http.get(this.url);
    }
}
