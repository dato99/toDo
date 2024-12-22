import { Injectable } from '@angular/core';
import { ToDo } from './Models/to-do-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDosService {
  private toDos: ToDo[] = [];
  router: any;
  updateActivity: any;
  constructor(private http: HttpClient) { }
  /*addToDo(toDo: ToDo){
    this.toDos.push(toDo);*/
  

  get toDoList(): ToDo[]{
    return this.toDos;
  }
  set toDoList(list: ToDo[]){
    this.toDos = list;
  }
  tatalActivities():number{
    return this.toDos.length;
  }
  completeActivities(): number {
    return this.toDos.filter(p=>p.done==true).length;
  }
  incompleteActivities():number{
    return this.toDos.filter(p=>p.done==false).length;
  }
  getActivities(): Observable<ToDo[]>{
    return this.http.get<ToDo[]>("kjdskdjsk");
  }
  addActivity(toDo:ToDo): Observable<any>{
  
    return this.http.post<any>("ksjfksdjf", toDo)
  }
  updateActivityStatus(toDo:ToDo):Observable<any>{
    return this.http.put<any>("ksjfksdjf", toDo)
  }
  deleteActivity(toDo: ToDo):Observable<any>{

    return this.http.delete<any>("ksjfksdthtjf"+toDo.id)
  }
}
