import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiBookService {
  apiUrl = 'https://630eec4a37925634188391d3.mockapi.io/faculties';
  // dependency injiction
  // __varName means private variable
  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get(this.apiUrl);
  }

  getAllBookById(id: any) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  DeleteById(id: any) {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  insert(form:any){
    return this.http.post(this.apiUrl,form)
  }

  upadte(id:any,form:any){
    return this.http.put(this.apiUrl+'/'+id,form);
  }
}
