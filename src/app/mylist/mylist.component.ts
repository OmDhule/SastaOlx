import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mylist',
  templateUrl: './mylist.component.html',
  styleUrls: ['./mylist.component.css']
})
export class MylistComponent implements OnInit {
  @Input() Mylist : any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
