import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './MyComponent/admin/admin.component';
import { CartComponent } from './MyComponent/cart/cart.component';
import { ChildComponent } from './MyComponent/child/child.component';
import { EmployeeComponent } from './MyComponent/employee/employee.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { MenComponent } from './MyComponent/men/men.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { WishlistComponent } from './MyComponent/wishlist/wishlist.component';
import { WomenComponent } from './MyComponent/women/women.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'men', component:MenComponent
  },
  {
    path:'women', component:WomenComponent
  },
  {
    path:'child', component:ChildComponent
  },
  {
    path:'cart', component:CartComponent
  },
  {
    path:'wishlist', component:WishlistComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  }
  ,
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'employee',component:EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
