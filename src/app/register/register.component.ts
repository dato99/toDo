import { Component } from '@angular/core';
import { User } from '../Models/users.model';
import { RouterLink } from '@angular/router';
import { UsersService } from '../users.service';
import { AbstractControl, FormBuilder, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService){

    this.registerForm = this.formBuilder.group({
    firstname: ['',this.validateName],
    lastname: ['', this.validateName],
    username: ['',Validators.required],
    password: ['', this.validatePassword],
    email: ['']
  });
}



  validateName(control: AbstractControl):ValidationErrors | null {
    return control.value.length < 2 ? {wrongName: {value: control.value}}:null;
  }

  validatePassword(control: AbstractControl):ValidationErrors | null {
    return(control.value.length < 8 || control.value.length > 30) ? {wrongPassword: {value: control.value}}: null;
  }

  user : User = new User();
  addUser(){
    Object.assign(this.user,this.registerForm.value);
        this.usersService.addUser(this.user).subscribe(
        res => {
          alert("Successful Registration");
          this.registerForm.reset();
      
    });
  }
}
