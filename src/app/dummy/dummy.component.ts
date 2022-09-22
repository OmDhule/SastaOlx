import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

Info:any={
  Fname : "",
  Price  : "",
  Location: "",
  Description: "",
  Manufacturer: "",
  Model: "",
  Year: ""
}
  onSubmit(data : { fname : string ; price : string; location: string; description: string;manufacturer: string;model: string;year: string}){

    console.log(this.Info.Fname = data.fname);
    console.log(this.Info.Price = data.price);
    console.log(this.Info.Location = data.location);
    console.log(this.Info.Description = data.description);
    console.log(this.Info.Manufacturer = data.manufacturer);
    console.log(this.Info.Model = data.model);
    console.log(this.Info.Year = data.year);
  }

}
