import { TodoService } from './services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from './models/todo';
import { EventReplayer } from 'preboot/browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todos: Todo[] = [];
  public newTodo: string;

  constructor(private todoService: TodoService, private replayer: EventReplayer) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      setTimeout(() => this.replayer.replayAll());
    });
  }

  addTodo() {
    this.todos.push({ name: this.newTodo, check: false });
    this.newTodo = '';
  }

}


