import { useState } from "react";
import TodoContainer from "./components/TodoContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#E2E7E9] h-screen flex  items-center justify-center">
      <TodoContainer />
    </div>
  );
}

export default App;
