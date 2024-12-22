import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import path from 'path';
import { ToDoComponent } from './to-do/to-do.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path: "login", component: LoginComponent},
  {path: "",component: LoginComponent },
  {path: "register", component: RegisterComponent},
  {path: "todoes", component: ToDoComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
