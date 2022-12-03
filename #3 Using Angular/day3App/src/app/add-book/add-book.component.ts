import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBookService } from '../api-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent {
  btnName = 'Add Student';
  id = -1;
  constructor(
    private api: ApiBookService,
    private router: Router,
    private actRou: ActivatedRoute
  ) {}

  myForm = new FormGroup({
    id: new FormControl(''),
    Booktitle: new FormControl(''),
    BookAuthor: new FormControl(''),
    BookPrice: new FormControl(''),
    BookImage: new FormControl(''),
    bookNoOfPages: new FormControl(''),
    BookDescription: new FormControl(''),
  });

  ngOnInit() {
    if (this.actRou.snapshot.params['id'] != null) {
      this.btnName = 'Edit Book';
      this.id = this.actRou.snapshot.params['id'];
      this.api.getAllBookById(this.id).subscribe((res: any) => {
        this.myForm.controls.BookAuthor.setValue(res.BookAuthor);
        this.myForm.controls.BookDescription.setValue(res.BookDescription);
        this.myForm.controls.BookImage.setValue(res.BookImage);
        this.myForm.controls.BookPrice.setValue(res.BookPrice);
        this.myForm.controls.Booktitle.setValue(res.Booktitle);
        this.myForm.controls.bookNoOfPages.setValue(res.bookNoOfPages);
        this.myForm.controls.id.setValue(res.id);
      });
    }
  }

  insert() {
    if (this.id >= 0) {
      this.api.upadte(this.id, this.myForm.value).subscribe((res) => {
        this.router.navigate(['/books']);
      });
    } else {
      console.log(this.myForm.value);
      this.api.insert(this.myForm.value).subscribe((res) => {
        this.router.navigate(['/books']);
      });
    }
  }
}
