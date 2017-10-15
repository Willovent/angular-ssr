import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todos: Todo[] = [];
  public newTodo: string;


  ngOnInit() {
    this.todos.push({ name: 'Faire une super présentation', check: false });
    this.todos.push({ name: 'Comparer avec et sans SSR', check: false });
    this.todos.push({ name: 'Montrer le code du rendu serveur', check: false });
    this.todos.push({ name: 'Montrer préboot', check: false });
  }

  addTodo() {
    this.todos.push({ name: this.newTodo, check: false });
    this.newTodo = '';
  }

}

export interface Todo {
  name: string;
  check: boolean;
}
