import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class Counter {
  count = 0

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
