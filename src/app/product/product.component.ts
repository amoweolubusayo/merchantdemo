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
      ()=>    
      {    
        this.message = "Product uploaded"  
        form.reset();
      });    
    //this.router.navigate(["/login"]);
  }
    console.log(form.value);
  }
}
