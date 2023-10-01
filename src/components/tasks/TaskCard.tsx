import { DotsHorizontal, Trash, Refresh } from "@styled-icons/boxicons-regular";
const TaskCard = () => {
  return (
    <div className="w-full items-center flex rounded-xl p-4 bg-purple-300 border-2 border-purple-200/80 min-h-[75px] duration-300  shadow-md">
      <div className="flex-1">
        <h1 className="text-xl  font-semibold">Make the diner</h1>
        <p className=" text-xs md:font-thin md:text-base">
          Necesito hacer la cena para el dia de mañana
        </p>
      </div>
      <div className=" w-16">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-circle bg-purple-400/80 hover:bg-purple-400 border-none m-1"
          >
            <DotsHorizontal className="w-5 h-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-40 menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="pb-1 mb-1 border-b">
              <a>
                <Refresh className="w-5 h-5" />
                Update
              </a>
            </li>
            <li className="flex  text-red-500">
              <a>
                <Trash className="w-5 h-5" />
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
