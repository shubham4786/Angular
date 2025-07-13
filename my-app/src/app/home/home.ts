import { Component } from '@angular/core';

import { User } from '../user/user';

@Component({
  selector: 'app-home',
  imports: [User],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  users = [{
    id: 1,
    name: "Sam"
  }, {
    id: 2,
    name: "Ram"
  }, {
    id: 3,
    name: "Jay"
  }, {
    id: 4,
    name: "Shree"
  },]
}
