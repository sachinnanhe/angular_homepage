import { Component, OnInit } from '@angular/core';
import{BookService} from 'src/app/book.service'
import Book from 'src/app/entity/book';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {

  book: Book = new Book();

  books: Book[] = [];


  save(){
    const observable= this.bookService.createBook(this.book);
    observable.subscribe(
      (response:any)=> {
         console.log(response);
         alert("successfully created")
      },
      function(error){
        console.log(error);
        alert("something went wrong")
        
      }
      )
    
   }

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    
  }

}
