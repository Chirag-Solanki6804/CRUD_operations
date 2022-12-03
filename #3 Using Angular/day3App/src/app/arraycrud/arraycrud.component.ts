import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-arraycrud',
  templateUrl: './arraycrud.component.html',
  styleUrls: ['./arraycrud.component.css']
})
export class ArraycrudComponent {
  myForm = new FormGroup({
    Booktitle:new FormControl(''),
    bookNoOfPages: new FormControl(''),
    BookDescription: new FormControl(''),
    BookAuthor:new FormControl(''),
    BookPrice: new FormControl(''),
    BookImage: new FormControl('')
  });
  faculties: Faculty[] = [];

  idToEdit = -1;

  insert() {
    if (this.idToEdit < 0) {
      this.faculties.push(<Faculty>this.myForm.value);
    } else {
      this.faculties[this.idToEdit] = <Faculty>this.myForm.value;
    }
    this.myForm.controls.Booktitle.setValue('');
    this.myForm.controls.BookAuthor.setValue('');
    this.idToEdit = -1;
  }

  delete(i: any) {
    // this.faculties.shift();
    console.log(i);
    this.faculties.splice(i, 1);
  }

  setValueForEdit(i: any) {
    this.idToEdit = i;
    this.myForm.controls.Booktitle.setValue(this.faculties[i].Booktitle);
    this.myForm.controls.BookAuthor.setValue(this.faculties[i].BookAuthor);
  }

}
