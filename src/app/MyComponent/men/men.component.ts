import { Component, OnInit } from '@angular/core';
import { FashionapiService } from '../fashionapi.service';
import { MenapiService } from './menapi.service';


@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  public datas:any=[];
  public men:any=[];
  count=0;
  j=0;
  public cart:any=[]
  c=0;
  
  constructor(public user : FashionapiService, public service:MenapiService) {
    this.user.getdata().subscribe(
      data=>{
        this.datas=data;
        // console.table(this.datas);
        for(let i=0;i<this.datas.length;i++)
        {
          if(this.datas[i].category == 'men'){
            this.men[this.j]=this.datas[i];
            this.j++;
          }

        }
        // console.table(this.men)
      },
    );
 
   }

  ngOnInit(): void {
  }
  getid(event:any)
  {
    // console.log(this.service.data)
    this.service.savedata(event);
    // console.log(this.service.data)
  }
  // wishlist // 
  wishid(event2:any)
  {
    
    this.service.savewish(event2);
    
  }
}
