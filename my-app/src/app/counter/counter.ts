import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count = 0

  newCount = signal(0)

  constructor() {
    effect(() => {
      console.log(this.newCount());
      console.log(this.z());
      this.y.set(30)
      console.log(this.z());

    })
  }

  x = signal(10)
  y = signal(20)
  z = computed(() => this.x() + this.y())



  // handleIncrement() {
  //   this.count += 1
  // }

  // handleReset() {
  //   this.count = 0
  // }

  // handleDecrement() {
  //   this.count -= 1
  // }

  handleCounter(val: string) {
    if (val == 'plus') {
      this.count += 1;
    } else if (val == 'minus') {
      if (this.count > 0) {

        this.count -= 1;
      }
    } else {
      this.count = 0;
    }
  }
}
