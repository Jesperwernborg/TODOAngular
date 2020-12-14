import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {TodoItem} from '../models/todo';


@Component({
  selector: 'app-todo-do',
  templateUrl: './todo-do.component.html',
  styleUrls: ['./todo-do.component.scss']
})
export class TodoDoComponent implements OnInit {

  @Output() deleteItem: EventEmitter<TodoItem> = new EventEmitter();
 
  @Input() todo!: TodoItem;

  status: boolean = false;

  
  constructor() { }
  
  ngOnInit(): void {
  }

  deleteTodoFromList() {
    this.deleteItem.emit(this.todo);
  }

  onComplete(){
    this.status = !this.status;       
}

}
