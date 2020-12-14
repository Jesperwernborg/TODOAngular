import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TodoItem } from '../models/todo';


@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.scss']
})
export class InputTodoComponent implements OnInit {

@Output() newItemEvent = new EventEmitter<string>();

theTodo: TodoItem = new TodoItem();

  constructor() { }

  ngOnInit(): void {
  }

  handleKeyUp(theValue: string) {
    this.theTodo.todo = theValue;
  }

  sendToParent() {
    if(this.theTodo.todo === ""){
    }else {this.newItemEvent.emit(this.theTodo.todo);}
  }

}
