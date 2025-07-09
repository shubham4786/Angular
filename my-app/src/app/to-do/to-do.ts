import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  imports: [FormsModule],
  templateUrl: './to-do.html',
  styleUrl: './to-do.css'
})
export class ToDo {
  task = ""
  taskList: { id: number, task: string }[] = []

  addTask() {
    this.taskList.push({ id: this.taskList.length + 1, task: this.task })
    this.task = ''

  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((item) => item.id != taskId)
  }
}
