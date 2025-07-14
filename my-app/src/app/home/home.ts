import { Component } from '@angular/core';

import { User } from '../user/user';

@Component({
  selector: 'app-home',
  imports: [User],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  users: undefined | any;
  handleUsers(users: any) {
    console.log(users);
    this.users = users;

  }
}
