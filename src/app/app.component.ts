import { Component } from '@angular/core';
import {Model,TodoItems} from "./model";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'todo-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TODO';
  model=new Model();
  getName()
  {
    return this.model.user;
  }
  getTodoItems()
  {
    return this.model.items;
  }
  addItem(todoText:string)
  {
    this.model.items.push(new TodoItems(todoText,false));
  }
}
