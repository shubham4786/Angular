import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  name: string = "Shubham"
  data: number | boolean = 20
  other: any = "anv"
  any = "dfghj"

  changeName() {
    this.name = "Aditya"
    this.data = true

    this.other = 123
    this.other = true
    this.other = {}

    this.any = "mnbv"
  }
}
