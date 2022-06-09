import { Component, OnInit } from '@angular/core';
import { FashionapiService } from '../fashionapi.service';
import { MenapiService } from '../men/menapi.service';


@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  public mydata:any=[]
  public women:any=[]
  j=0;
  constructor(public user : FashionapiService,public service:MenapiService) {
    this.user.getdata().subscribe(
      data=>{
        this.mydata=data;
        // console.table(data);
        for(let i=0;i<this.mydata.length;i++)
        {
          if(this.mydata[i].category == 'women')
          {
            this.women[this.j]=this.mydata[i];
            this.j++;
          }
          
        }
        
        
      },
    );
   }

  ngOnInit(): void {
  }
  getid(event:any)
  {
    
    this.service.savedata(event);
    
  }
  //wishlist //
  wishid(event1:any)
  {
    
    this.service.savewish(event1);
    
  }
}
