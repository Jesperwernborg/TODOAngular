import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  todos: TodoItem[] = [
    {todo: 'Clean room'},
    {todo: 'Do angular exercises'},
    {todo: 'Read book'},
    {todo: 'Walk dog'},
  ];
  constructor() { }

  getTodoList() {
    return this.todos;
  }

  addItem(item: TodoItem) {
    this.todos.push(item)
  }

  deleteItem(item: TodoItem) {
    const index = this.todos.indexOf(item);
    this.todos.splice(index, 1);
    
  }
}
