import { Component } from '@angular/core';
import { ApiBookService } from '../api-book.service';
import { Book } from '../book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  data:Book[]=[];

  constructor(private api:ApiBookService){

  }

  ngOnInit(){
    this.api.getAllBooks().subscribe((res:any)=>{
      this.data=res;
      console.log(this.data);
      return this.data;
    });
  }
}
