import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listform',
  templateUrl: './listform.component.html',
  styleUrls: ['./listform.component.css']
})
export class ListformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// Info:any={
//   FirstName : "",
//   LastName  : ""
// }
//   onSubmit(data : { fname : string ; lname : string}){

//     console.log(this.Info.FirstName = data.fname);
//     console.log(this.Info.LastName = data.lname);

//   }

}
