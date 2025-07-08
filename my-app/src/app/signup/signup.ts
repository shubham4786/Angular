import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  name = ""
  displayName = ""

  displayEmail = ""
  email = ""
  handleInput(event: Event) {
    this.name = (event.target as HTMLInputElement).value

  }
  getName() {
    this.displayName = this.name
  }

  setName() {
    this.name = "Shubahm"
  }

  getEmail(value: string) {
    this.displayEmail = value
  }
  setEmail(value: string) {
    this.email = "abc@gmail.com"
  }
}
