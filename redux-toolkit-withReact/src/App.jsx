import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CakeView } from "./app/features/cake/CakeView";
import { IceCreamView } from "./app/features/icecream/IceCreamView";
import { UserView } from "./app/features/user/UserView";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <CakeView />
      <IceCreamView />
      <UserView />
    </div>
  );
}

export default App;
