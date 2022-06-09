
import { Component, OnInit, } from '@angular/core';
import { FashionapiService } from '../fashionapi.service';
import { MenapiService } from '../men/menapi.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public mydata:any=[]
  public children:any=[]
  j=0;

  constructor(public user:FashionapiService,public service:MenapiService) {
       
    this.user.getdata().subscribe(
      data=>{
        this.mydata=data;
        // console.table(this.mydata);
        
        for(let i=0;i<this.mydata.length;i++)
        {
          if(this.mydata[i].category == 'child')
          {
            this.children[this.j]=this.mydata[i];
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
  //wishlist
  wishid(event1:any)
  {
    
    this.service.savewish(event1);
    
  }

}
