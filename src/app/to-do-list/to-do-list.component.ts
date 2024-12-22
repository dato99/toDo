import { Component } from '@angular/core';
import { ToDosService } from '../to-dos.service';
import { ToDo } from '../Models/to-do-model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  constructor(public toDosService: ToDosService){}

  ngOnInit(): void{
    this.toDosService.getActivities().subscribe(data =>{
      this.toDosService.toDoList = data;
    });
  }

  updateActivity(toDo: ToDo): void{
  
    this.toDosService.updateActivity(toDo).subscribe();
    
  }
  deleteActivity(toDo: ToDo): void{
  
    this.toDosService.deleteActivity(toDo).subscribe(res=>{
      this.toDosService.getActivities().subscribe(
        data=>{
          this.toDosService.toDoList = data;
        });
    }); 
  } 
}
