import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductModel } from '../shared/shared.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  message: any;
  response: any;
  durationInSeconds = 10
  constructor(
    public service: SharedService,
    public model : ProductModel,
    public _snackBar: MatSnackBar,
    public router : Router) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if(form.valid){
    this.service.product(form.value).subscribe(
      (data: ProductModel[]| any)=>
      {
        this.response = data;
        this._snackBar.open(this.response.message,'Close', {
          duration: this.durationInSeconds * 1000,
        });
        this.message = "Product uploaded"
        form.reset();
      }
      ,error => {
        this._snackBar.open(this.response.message,'Close',{
          duration: this.durationInSeconds * 1000
        });
        form.reset();
      });
  }
    console.log(form.value);
  }
}
