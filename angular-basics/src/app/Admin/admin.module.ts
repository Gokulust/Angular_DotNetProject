import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './Component/admin-home/admin-home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { VerticalNavbarComponent } from './Component/vertical-navbar/vertical-navbar.component';
import { MainContentComponent } from './Component/main-content/main-content.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { ViewProductsComponent } from './Component/view-products/view-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AdminCardStatusComponent } from './Component/admin-card-status/admin-card-status.component';
import { UpdateProductComponent } from './Component/update-product/update-product.component';




@NgModule({
  declarations: [
    AdminHomeComponent,
    DashboardComponent,
    VerticalNavbarComponent,
    MainContentComponent,
    AddProductComponent,
    ViewProductsComponent,
    AdminCardStatusComponent,
    UpdateProductComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class AdminModule { }
