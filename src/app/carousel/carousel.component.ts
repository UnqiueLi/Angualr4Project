import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goPrev() {
    $('.carousel').carousel('prev')
  } 
  
  goNext() {
    $('.carousel').carousel('next')
  }

}
