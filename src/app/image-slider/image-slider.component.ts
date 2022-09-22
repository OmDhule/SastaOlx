import { Component, OnInit, Input } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  @Input() images: carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0;

  ngOnInit(): void {
  }

  //sets index of image on dot/indicator click 
  selectedImage(index: number): void{
    this.selectedIndex = index;
  }

  onPrevClick():void{
      if(this.selectedIndex === 0){
        this.selectedIndex = this.images.length-1;
      }
      else{
        this.selectedIndex --;
      }
  }

  onNextClick():void{

    if(this.selectedIndex === this.images.length-1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex ++;
    }
  }



}
