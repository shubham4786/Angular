import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Output() getUser = new EventEmitter()


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

  dispyaData() {
    this.getUser.emit(this.users)
  }
}
