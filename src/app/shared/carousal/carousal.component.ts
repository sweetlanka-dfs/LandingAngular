import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../api.service';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {
  pages: any[];
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class=\'fa fa-chevron-left\'></i>', '<i class=\'fa fa-chevron-right\'></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  };

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getPrices();
  }

  getPrices() {
    this.api.sendPostRequest().subscribe((data: any[]) => {
      console.log(JSON.stringify(data));
      this.pages = data;
    });
  }




}
