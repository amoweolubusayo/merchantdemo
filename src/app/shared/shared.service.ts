import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpHandler, HttpEvent, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterModel, UpdateProfileModel, ExploreModel, LikeModel, LoginModel, PostModel, LikeInfoModel, UsersModel, ProductModel, OneTimePaymentModel, RecurringPaymentModel} from '../shared/shared.model'


@Injectable({
    providedIn: 'root'
})

export class SharedService {
    readonly APIUrl = "https://paymerchant.azurewebsites.net/api";
    constructor(private http: HttpClient) {}
    register(model: RegisterModel) {
      return this.http.post (this.APIUrl + '/Creator', model);
    }
    product(model: ProductModel) {
      return this.http.post (this.APIUrl + '/Product', model);
    }
    payonce(model: OneTimePaymentModel) {
      return this.http.post (this.APIUrl + '/OneTimePayment', model);
    }
    recurringpay(model: RecurringPaymentModel) {
      return this.http.post (this.APIUrl + '/RecurringPayment', model);
    }
    login(model: LoginModel){
      return this.http.post (this.APIUrl + '/User/login',model);
    }
     explore(): Observable < ExploreModel[] > {
       return this.http.get < ExploreModel[] > (this.APIUrl + '/Posts/getAllPosts');
     }
     getAllUsers(): Observable < UsersModel[] > {
      return this.http.get < UsersModel[] > (this.APIUrl + '/User/getAll');
    }
  
}
