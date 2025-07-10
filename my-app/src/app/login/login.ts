import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  profileForm = new FormGroup(
    {

      name: new FormControl(),
      password: new FormControl(),
      email: new FormControl()
    }
  )

  handleSubmit() {
    console.log(this.profileForm.value);

  }
}
