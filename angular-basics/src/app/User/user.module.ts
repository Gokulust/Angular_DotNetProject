import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Component/footer/footer.component';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { ArrivalsComponent } from './Component/arrivals/arrivals.component';
import { UserRoutingModule } from './user-routing.module';
import { MainComponent } from './Component/main/main.component';
import { CartTotalComponent } from './Component/cart-total/cart-total.component';
import { CartComponent } from './Component/cart/cart.component';
import { CartProductsComponent } from './Component/cart-products/cart-products.component';
import { ProductsComponent } from './Component/products/products.component';
import { ProductCategoryComponent } from './Component/product-category/product-category.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ArrivalsComponent,
    MainComponent,
    CartTotalComponent,
    CartComponent,
    CartProductsComponent,
    ProductsComponent,
    ProductCategoryComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
