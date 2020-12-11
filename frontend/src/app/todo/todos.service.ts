import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get(`${environment.baseUrl}/todos`);
  }

  addTodo(data) {
    return this.http.post(`${environment.baseUrl}/todo`, data);
  }

  updateTodo(data) {
    return this.http.put(`${environment.baseUrl}/todo/${data.id}`, data);
  }

  removeTodo(id) {
    return this.http.delete(`${environment.baseUrl}/todos/${id}`);
  }
}
