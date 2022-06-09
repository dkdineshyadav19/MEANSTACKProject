import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenComponent } from './MyComponent/men/men.component';
import { WomenComponent } from './MyComponent/women/women.component';
import { ChildComponent } from './MyComponent/child/child.component';
import { CartComponent } from './MyComponent/cart/cart.component';
import { WishlistComponent } from './MyComponent/wishlist/wishlist.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './MyComponent/admin/admin.component';
import { EmployeeComponent } from './MyComponent/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    WomenComponent,
    ChildComponent,
    CartComponent,
    WishlistComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
