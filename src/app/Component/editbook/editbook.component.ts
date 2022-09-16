import { Component, OnInit } from '@angular/core';
import Book from 'src/app/entity/book';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  book: Book = new Book();

  books: Book[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
