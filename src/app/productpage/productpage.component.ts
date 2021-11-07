import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OneTimePaymentModel } from '../shared/shared.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  message: any; 
  response: any;
  constructor(
    public service: SharedService,
    public model : OneTimePaymentModel,
    public _snackBar: MatSnackBar,
    public router : Router) { }
  
  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if(form.valid){
    this.service.payonce(form.value).subscribe(    
      (data: OneTimePaymentModel[]| any)=>    
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
