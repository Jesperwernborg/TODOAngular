import { Component } from '@angular/core';
import { TodoItem } from './models/todo';
import { TodoListService } from './services/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
todos!: TodoItem[];

todoListService: TodoListService;

constructor(todoListService: TodoListService){
  this.todoListService = todoListService;
}
ngOnInit(){
  this.todos = this.todoListService.getTodoList();
}

addToList(todo: string) {
  this.todoListService.addItem({ todo });
  console.log(this.todos)
} 

deleteFromList(todo: TodoItem) {
  this.todoListService.deleteItem(todo)
}

}
