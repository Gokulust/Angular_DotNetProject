import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { AdminCardStatusComponent } from './Component/admin-card-status/admin-card-status.component';
import { AdminHomeComponent } from './Component/admin-home/admin-home.component';
import { ViewProductsComponent } from './Component/view-products/view-products.component';
import { UpdateProductComponent } from './Component/update-product/update-product.component';

const adminRoutes: Routes = [
  {
    path:'', component:AdminHomeComponent,
    children: [
      { path: 'cardstatus', component: AdminCardStatusComponent },
      { path: 'addproduct', component: AddProductComponent }, // Default child route
      { path: 'viewproducts', component: ViewProductsComponent },
      { path: 'update-product/:id', component:UpdateProductComponent }
    ]
  },
  
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }

