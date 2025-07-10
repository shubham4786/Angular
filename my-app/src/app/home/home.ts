import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
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
