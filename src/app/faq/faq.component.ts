import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  faq = [
    
    {
      id:1,
      Q : 'Use of this Website ?',
      A : 'To sell the used products or the products you dont need anymore.',
      toggle : false ,
      buttonn : "+"
    },

    {
      id:2,
      Q : 'How to sell ?',
      A : 'Step 1:- Go to My-Listing Page . Step 2:- Click On List Button.  Step 3:- Click on the category in which you have to list the product and then fill the form accordingly. Ezzz',
      toggle : false ,
      buttonn : "+"
    },

    {
      id:3,
      Q : 'How can I contact a Seller?',
      A : 'You can see the number of the lister when you open a perticular add. Then just use whatsApp Ezzzzzzzzz',
      toggle : false ,
      buttonn : "+"
    },

    {
      id:4,
      Q : 'How to edit/delete an listing?',
      A : "Goto the My Listings page. There you can see the products you have already listed. Just Click the Edit button of the specific product to Edit it",
      toggle : false ,
      buttonn : "+"
    },

  
  ];

  ngOnInit(): void {
  }

public buttonn : any = "";

toggle(id:number) {
    this.faq[id].toggle = !this.faq[id].toggle;
    if (this.faq[id].toggle){
      this.faq[id].buttonn = "-"
    }
    else {
      this.faq[id].buttonn = "+"
    }
  }
}
