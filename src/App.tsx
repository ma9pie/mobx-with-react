import { observer } from "mobx-react";
import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment = () => {
    this.count++;
  };
}

const counter = new Counter();

const App = () => {
  const { count, increment } = counter;
  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default observer(App);
