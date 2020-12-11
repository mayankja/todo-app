import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public tasks:any [];
  public newTask: string = '';
  public id: string = '';

  constructor(private api: TodosService) {
    this.tasks = [];
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.api.getTodos().subscribe((res:any) => {
      this.tasks = res;
    }, err => {
      console.log(err);
    })
  }

  addTask() {
    let input = { name: this.newTask}
    this.api.addTodo(input).subscribe(res => {
      this.getTodos();
    }, err => {
      console.log(err);
    })
  }

  editTask(task) {
    this.id = task._id;
    this.newTask = task.name;
  }

  updateTask() {
    if(this.newTask == '') return
    let input = { id: this.id, name: this.newTask}
    this.api.updateTodo(input).subscribe(res => {
      this.newTask = '';
      this.getTodos();
    }, err => {
      console.log(err);
    })
  }

  removeTask(id) {
    this.api.removeTodo(id).subscribe(res => {
      this.getTodos();
    }, err => {
      console.log(err);
    })
    // this.tasks.splice(this.tasks.indexOf(task), 1);
  }

  toggle(task) {
    task.done = !task.done;
  }

}
