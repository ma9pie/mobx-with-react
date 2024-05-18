import { observer } from "mobx-react";
import Counter from "components/Counter";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Counter></Counter>
    </div>
  );
};

export default observer(App);
