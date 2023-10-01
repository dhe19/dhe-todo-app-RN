import { useState } from "react";
import TodoContainer from "./components/TodoContainer";
import Modal from "./components/modal/Modal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[url(./background.jpg)] px-2 md:px-0 bg-cover h-screen flex  items-center justify-center">
      <TodoContainer />
      <Modal />
    </div>
  );
}

export default App;
