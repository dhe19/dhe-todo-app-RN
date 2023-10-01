import { PlusCircle } from "@styled-icons/boxicons-regular";
const Navbar = () => {
  return (
    <div className=" flex flex-col md:flex-row gap-3 md:gap-0  items-center px-4 md:px-0 justify-between text-zinc-800">
      <div className="flex gap-1 items-center">
        <span className="flex bg-gradient-to-tr from-purple-500 to-purple-700/80 rounded-full items-center justify-center h-10 w-10 shadow-md font-extrabold">
          <PlusCircle className="w-8 h-8 text-white/80" />
        </span>
        <h1 className="font-extrabold text-2xl uppercase">Taskys</h1>
      </div>
      <div className="hidden md:block">
        <h3 className="text-3xl font-semibold">Tasks To Complete</h3>
      </div>
      <div>
        <div className="avatar shadow-md rounded-full ">
          <div className="w-24 md:w-10 cursor-pointer rounded-full ring  ring-purple-400 ring-offset-base-100 ring-offset-2">
            <img src="./avatar.png" />
          </div>
        </div>
        <span className="block md:hidden font-semibold text-center text-xl">
          dhe19
        </span>
      </div>
    </div>
  );
};

export default Navbar;
