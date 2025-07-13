import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {
  userDetails: any = ''
  addDetails(val: NgForm) {
    console.log(val);
    this.userDetails = val

  }
}
