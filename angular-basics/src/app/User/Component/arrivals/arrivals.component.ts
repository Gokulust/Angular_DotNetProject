import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../Services/user-service.service';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {

  productList:any[]=[];
  constructor(private apiService:UserServiceService ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }
  fetchProducts() {
    this.apiService.getSomeData().subscribe((cartProducts) => {
      this.productList = cartProducts;
    });
  }

}
