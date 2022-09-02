import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const PostBook_URL = "http://localhost:9099/book"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  createuser(user:{
    Title:string;
      Author:string;
      Category:string;
      Image:string;
      Price:number;
      Publisher:string;
      Active:string;

    }){
    return this.http.post(PostBook_URL,user)
  }
  

  constructor(private http: HttpClient) { }
}
