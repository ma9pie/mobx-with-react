import { observer } from "mobx-react";
import { counterStore } from "store";
import Button from "components/Button";

const Counter = () => {
  const { count, increment, descrement } = counterStore;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <span style={{ fontSize: 24 }}>{count}</span>
      <Button onClick={increment}>+</Button>
      <Button onClick={descrement}>-</Button>
    </div>
  );
};

export default observer(Counter);
