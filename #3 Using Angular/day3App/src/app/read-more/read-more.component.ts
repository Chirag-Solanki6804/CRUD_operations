import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiBookService } from '../api-book.service';
import { Book } from '../book';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css'],
})
export class ReadMoreComponent {
  id = 0;
  data: Book = new Book();
  constructor(
    private actRoute: ActivatedRoute,
    private api: ApiBookService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.actRoute.snapshot.params['id'];
    console.log(this.actRoute.snapshot.params['id']);

    this.api.getAllBookById(this.id).subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }

  Delete() {
    this.api.DeleteById(this.id).subscribe((res) => {
      this.router.navigate(['/books']);
    });
  }
}
