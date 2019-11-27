import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/services/credit.service';
import { Credit } from 'src/app/classes/credit';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {

  private credits: Credit[];

  constructor(private creditService: CreditService) { }

  ngOnInit() 
  {
    this.creditService.getCredits().subscribe(creditsPage => 
      {
        console.log('credits', creditsPage);
        this.credits = creditsPage.content;
      });
  }
}
