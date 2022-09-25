import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../state/Counter/counter.action';
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }
  //Implement the increment, decrement, and reset methods by dispatching actions to the store.
  increment() {
    this.store.dispatch(increment());
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {
  }

}
