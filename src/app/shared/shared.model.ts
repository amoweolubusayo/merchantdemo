export class RegisterModel {
  businessName: string;
  businessCategory: string;
  phoneNumber: string;
  bank: string;
  email: string;
  password: string;
  accountNumber: string;
constructor() {
    this.businessName = "";
    this.businessCategory = "";
    this.phoneNumber = "";
    this.bank = "";
    this.email = "";
    this.password = "";
    this.accountNumber = ""
  }
}
export class ProductModel {
  description: string;
  name: string;
  price: 0;
  currency: string;
  limited: boolean;
  quantity: 0;
constructor() {
    this.description = "";
    this.name = "";
    this.price = 0;
    this.currency = "";
    this.limited = true;
    this.quantity = 0;
  }
}
export class OneTimePaymentModel {
  name: string;
  email: string;
  amount: 0;
  subaccount: string;
constructor() {
    this.name = "";
    this.email = "";
    this.amount = 0;
    this.subaccount = ""
  }
}
export class RecurringPaymentModel {
  name: string;
  email: string;
  amount: 0;
  subaccount: string;
  interval: string;
constructor() {
    this.name = "";
    this.email = "";
    this.amount = 0;
    this.subaccount = ""
    this.interval = ""
  }
}
export class LoginModel {
  email: string;
  password: string;
constructor() {
    this.email = "";
    this.password = "";
  }
}
export class ExploreModel {
  status: boolean;
  message: string;
  data: {
   postId: Number;
   content : string;
   isDeleted: boolean;
   isLiked: boolean;
   postedBy: string
  }
constructor() {
    this.status = false;
    this.message = "";
    this.data = {
      postId : 0,
      content : "",
      isDeleted: false,
      isLiked :false,
      postedBy : ""
    }
  }
}
export class UsersModel {
  status: boolean;
  message: string;
  data: {
   userId: Number;
   userName : string;
   numberOfPosts: Number;
  }
constructor() {
    this.status = false;
    this.message = "";
    this.data = {
      userId : 0,
      userName : "",
      numberOfPosts: 0,
    }
  }
}
export class RegisterSuccessModel {
  status: boolean;
  message: string
constructor() {
    this.status = false;
    this.message = "";
  }
}
export class ProfileInfoModel {
  status: boolean;
  message: string;
  data: {
   firstName: string;
   lastName : string;
   userName: string;
   Email: string;
  }
constructor() {
    this.status = false;
    this.message = "";
    this.data = {
      firstName : "",
      lastName : "",
      userName: "",
      Email : "",
    }
  }
}
export class UpdateProfileModel {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
constructor() {
    this.firstName = "";
    this.lastName = "";
    this.userName = "";
    this.email = "";
}
}
export class LikeModel {
  userId: Number;
  postId: Number;
constructor() {
    this.postId = 0;
    this.userId = 0;
}
}
export class LikeInfoModel {
  status: boolean;
  message: string;
  data: {
    postId: Number;
    numberOfLikes : Number;
  }
constructor() {
    this.status = false;
    this.message = "";
    this.data = {
      postId : 0,
      numberOfLikes : 0,
    }
  }
}
export class PostModel {
  email: string;
  content: string;
constructor() {
    this.email = "";
    this.content = "";
  }
}


