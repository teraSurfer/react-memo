import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {count}
      <Child1 handleClick={() => setCount(count + 1)} />
      <Child2 />
    </div>
  );
}
