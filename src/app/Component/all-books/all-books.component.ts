import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/book.service';
import Book from 'src/app/entity/book';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {


  books: Book[] = [];

  constructor( public bookService : BookService) { }

  ngOnInit(): void {
    const promise = this.bookService.getAllBooks();
    promise.subscribe((response)=>
    {
      console.log(response)
      this.books=response as Book[];
    }
    
    )
  }

}
