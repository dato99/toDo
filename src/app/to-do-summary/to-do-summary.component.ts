import { Component } from '@angular/core';
import { ToDosService } from '../to-dos.service';

@Component({
  selector: 'app-to-do-summary',
  templateUrl: './to-do-summary.component.html',
  styleUrl: './to-do-summary.component.css'
})
export class ToDoSummaryComponent {
  constructor(public toDosService: ToDosService){}
}
