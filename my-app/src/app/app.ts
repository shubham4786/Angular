import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from './to-do/to-do';


@Component({
  selector: 'app-root',
  imports: [FormsModule, ToDo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = ""
}
