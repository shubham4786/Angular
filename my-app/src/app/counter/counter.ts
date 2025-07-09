import { Component, computed, effect, signal } from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count = signal(1)
  displayHeading = signal(false)

  constructor() {
    effect(() => {
      if (this.count() % 2 == 0) {
        this.displayHeading.set(true)
        // this.displayHeading = true

        setTimeout(() => {
          // this.displayHeading = false
          this.displayHeading.set(false)
        }, 1000)
      } else {
        // this.displayHeading = false
        this.displayHeading.set(false)

      }
    })
  }
  updateCount() {
    this.count.set(this.count() + 1)
  }
}
