import React from "react";
import Navbar from "./navbar/Navbar";
import TaskContainer from "./tasks/TaskContainer";

const TodoContainer = () => {
  return (
    <div className="text-[rgb(44, 41, 41)] h-4/5 w-full md:w-4/5 bg-base-100/30 backdrop-blur-md rounded-2xl p-2 py-6 md:p-8 shadow-2xl border-2 border-white/30 overflow-y-scroll no-scrollbar">
      <Navbar />
      <TaskContainer />
    </div>
  );
};

export default TodoContainer;
