import { Component, OnInit } from '@angular/core';
import { FashionapiService } from '../fashionapi.service';
import { MenapiService } from '../men/menapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public datas:any=[];
  public cart:any=[]
  i=0;


  constructor(public user : FashionapiService,public service:MenapiService) {
    this.user.getdata().subscribe(
      data=>{
        this.datas=data;
        // console.table(this.datas);
       
      },
    );
    
   }

  ngOnInit(): void {
  }


}
