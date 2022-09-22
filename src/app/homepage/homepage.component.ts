import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  myDate = Date.now();

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    {
      imageSrc : '../../assets/banner4.jpg',
      imageAlt : 'banner4',
    },
    {
      imageSrc : '../../assets/banner2.jpg',
      imageAlt : 'banner2',
    },
    {
      imageSrc : '../../assets/banner3.jpg',
      imageAlt : 'banner3',
    },
    {
      imageSrc : '../../assets/banner1.jpg',
      imageAlt : 'banner1',
    }
  ]
}
