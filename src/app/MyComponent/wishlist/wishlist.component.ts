import { Component, OnInit } from '@angular/core';
import { FashionapiService } from '../fashionapi.service';
import { MenapiService } from '../men/menapi.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public wishdata:any=[];
  public alldata:any=[]
public savedwish:any=[];
k=0;
j=0;
cartTotal=0;
  constructor(private service:MenapiService,public user:FashionapiService) { 
    
    this.wishdata=this.service.getwish();
    this.user.getdata().subscribe(
      data=>{
          this.alldata=data;
          for(let i=0;i<this.alldata.length;i++)
          {
            if(this.alldata[i].id == this.wishdata[this.j])
            {
              this.savedwish[this.k] = this.alldata[i];
              // console.log(this.savedcart[this.k],this.k)
              this.k++;
              this.j++;
            }
          }
          // console.log(this.savedwish)
    for(let i=0;i<this.savedwish.length;i++)
      {
        // console.log(this.savedcart[i].price)
        this.cartTotal+=this.savedwish[i].price;
      }
      }
    
    ); 
  }

  ngOnInit(): void {
  }

}
