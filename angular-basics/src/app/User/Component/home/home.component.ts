import { Component, OnInit,ViewEncapsulation } from '@angular/core';
declare const Swiper: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  //   var swiper = new Swiper(".home-slider", {
  //     loop:true,
  //     grabCursor:true,
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev",
  //     },
  // });
  }

}
