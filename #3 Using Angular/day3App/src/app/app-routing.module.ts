import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ArraycrudComponent } from './arraycrud/arraycrud.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { ReadMoreComponent } from './read-more/read-more.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'arraycrud',component:ArraycrudComponent},
  {path:'books',component:BooksComponent},
  {path:'books/add',component:AddBookComponent},
  {path:'books/edit/:id',component:AddBookComponent},
  {path:'books/readMore/:id',component:ReadMoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
