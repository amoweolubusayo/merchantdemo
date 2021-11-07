import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RecurringPaymentModel } from '../shared/shared.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-recurringpaypage',
  templateUrl: './recurringpaypage.component.html',
  styleUrls: ['./recurringpaypage.component.css']
})
export class RecurringpaypageComponent implements OnInit {
  message: any; 
  response: any;
  constructor( 
    public service: SharedService,
    public model : RecurringPaymentModel,
    public _snackBar: MatSnackBar,
    public router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if(form.valid){
    this.service.recurringpay(form.value).subscribe(    
      (data: RecurringPaymentModel[]| any)=>    
      {  
        this.response = data;
        console.log(this.response.data.authorizationUrl);  
        this.message = "Authorization created"  
        window.open(this.response.data.authorizationUrl);
      });    
  }
    console.log(form.value);
  }
}
