import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Credit } from 'src/app/classes/credit';
import { Customer } from 'src/app/classes/customer';
import { Product } from 'src/app/classes/product';
import { CreditService } from 'src/app/services/credit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-credit-form',
  templateUrl: './credit-form.component.html',
  styleUrls: ['./credit-form.component.css']
})
export class CreditFormComponent implements OnInit {

  @ViewChild("form", {static: false}) form: NgForm;

  private customer: Customer = new Customer("Jan", "Nowak", "83091837997");
  private product: Product = new Product("Na mieszkanie", 400000);
  private credit: Credit = new Credit("mieszkaniowy", this.customer, this.product);

  constructor(private creditService: CreditService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  onSubmit()
  {
    if(this.form.valid)
    {
      console.log('this.credit', this.credit);
      this.creditService.addCredit(this.credit).subscribe(value =>{
        this.router.navigate(['/admin/credits']);
      });
    }
  }
}
