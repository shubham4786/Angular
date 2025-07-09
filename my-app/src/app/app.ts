import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Counter } from './counter/counter';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-root',
  imports: [Counter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'First Anguler App';
  name = "Shubham";

  handleclickedFuction() {
    console.log("Function Called");
    this.otherFunction()
  }

  otherFunction() {
    console.log("Other Function");

  }
}
