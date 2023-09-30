const Navbar = () => {
  return (
    <div className=" flex  items-center justify-between text-zinc-800">
      <div className="flex gap-1 items-center">
        <h1 className="font-extrabold text-xl">TaskUN</h1>
        <span className="flex text-white bg-amber-400 rounded-full flex-col items-center justify-items-center h-7 w-7 font-extrabold">
          +
        </span>
      </div>
      <div>
        <h3 className="text-3xl font-semibold">Tasks To Complete</h3>
      </div>

      <div className="avatar">
        <div className="w-10 cursor-pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src="./avatar.png" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
