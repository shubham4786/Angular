import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule

  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  name = new FormControl()
  password = new FormControl()

  displayValue() {
    console.log(this.name.value, this.password.value);

  }
}
