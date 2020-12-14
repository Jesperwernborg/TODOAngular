import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoDoComponent } from './todo-do/todo-do.component';
import { TodoDoneComponent } from './todo-done/todo-done.component';
import { InputTodoComponent } from './input-todo/input-todo.component';
import { TodoListService } from './services/todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoDoComponent,
    TodoDoneComponent,
    InputTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
