import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { MainComponent } from './Component/main/main.component';
import { CartComponent } from './Component/cart/cart.component';

const userRoutes: Routes = [
  {
    path:'',component:MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      {path:'cart',component:CartComponent}
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }

