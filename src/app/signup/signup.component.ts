import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { RegisterModel, RegisterSuccessModel } from '../shared/shared.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message: any;
  response: any
  durationInSeconds = 10
  constructor(
    public service: SharedService,
    public model : RegisterModel,
    public _snackBar: MatSnackBar,
    public router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if(form.valid){
    this.service.register(form.value).subscribe(
      (data: RegisterModel[]| any)=>
      {
        this.response = data;
        this._snackBar.open('Sign up successful','Close', {
          duration: this.durationInSeconds * 1000,
        });
        form.reset();
      },
        error => {
          this._snackBar.open(this.response.message,'Close',{
            duration: this.durationInSeconds * 1000
          });
          form.reset();
        });
    //this.router.navigate(["/login"]);
  }
    console.log(form.value);
  }
}
