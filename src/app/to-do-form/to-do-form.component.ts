import { Component } from '@angular/core';
import { ToDo } from '../Models/to-do-model';
import { ToDosService } from '../to-dos.service';
@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrl: './to-do-form.component.css'
})
export class ToDoFormComponent {
  
  activity: string="";

  constructor(private toDosService: ToDosService){}

  addDescription(){
    let toDo = new ToDo();
    toDo.activity = this.activity;
    this.toDosService.addActivity(toDo).subscribe(res =>{
      this.toDosService.getActivities().subscribe(data =>{
        this.toDosService.toDoList = data;
      });
    });
    this.activity="";
  }

}
