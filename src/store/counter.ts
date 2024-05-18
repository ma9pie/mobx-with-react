import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count++;
  };

  descrement = () => {
    this.count--;
  };
}

export const counterStore = new CounterStore();
