import TaskCard from "./taskCard";
import { MessageSquareAdd } from "@styled-icons/boxicons-regular/MessageSquareAdd";
const TaskContainer = () => {
  return (
    <div className="mt-4 py-4 flex flex-col gap-y-3 md:gap-y-5 ">
      <div className=" flex justify-center md:justify-end pr-2">
        <button
          onClick={() => document.getElementById("my_modal_5").showModal()}
          className="btn btn-circle group shadow-lg backdrop-blur-sm bg-white/60 hover:bg-white"
        >
          <MessageSquareAdd className="w-6 h-6 " />
        </button>
      </div>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default TaskContainer;
