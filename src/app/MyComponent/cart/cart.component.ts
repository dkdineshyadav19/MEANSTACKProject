import { Component, OnInit } from '@angular/core';
import { FashionapiService } from '../fashionapi.service';
import { MenapiService } from '../men/menapi.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public alldata:any=[]
public cartdata:any=[]
public savedcart:any=[]
j=0;
k=0
cartTotal=0;
  constructor(private service:MenapiService,public user:FashionapiService) {
    this.cartdata=this.service.getdata();
    this.user.getdata().subscribe(
      data=>{
          this.alldata=data;
          for(let i=0;i<this.alldata.length;i++)
          {
            if(this.alldata[i].id == this.cartdata[this.j])
            {
              this.savedcart[this.k] = this.alldata[i];
              // console.log(this.savedcart[this.k],this.k)
              this.k++;
              this.j++;
            }
          }
          // console.log(this.savedcart)
    for(let i=0;i<this.savedcart.length;i++)
      {
        // console.log(this.savedcart[i].price)
        this.cartTotal+=this.savedcart[i].price;
      }
      }
    
    );  
   }

  ngOnInit(): void {
  }
 
}
