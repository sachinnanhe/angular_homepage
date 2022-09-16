import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Book from './entity/book';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  PostBook_URL = "http://localhost:9099/author/book"
  getall= "http://localhost:9099/author/allbooks"

  createBook(book:Book){
    return this.http.post(this.PostBook_URL,book)
  }
  
  getAllBooks(){
    return this.http.get(this.getall)
  }

  constructor(private http: HttpClient) { }
}
