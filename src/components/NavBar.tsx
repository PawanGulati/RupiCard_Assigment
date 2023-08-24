import { useState } from "react";
import { Logo } from "../assets/Logo";
import { BurgerIcon } from "../assets/Burger";
import { CrossSvgIcon } from "../assets/CrossIcon";
import { rightArrow } from "../assets/RightArrow";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container max-w-6xl mx-auto absolute z-10 top-0 left-0 right-0">
      <div className="flex justify-between items-center px-4">
        <Logo className={"fill-black h-20"} />
        {!open && (
          <BurgerIcon className="md:hidden" onClick={() => setOpen(true)} />
        )}
        {open && <CrossSvgIcon className="" onClick={() => setOpen(false)} />}
        <button className="hidden md:block text-white bg-gray-800 bg-opacity-60 px-8 py-2 rounded-lg hover:bg-black hover:text-[#4EE8DF] ">
          Uni paychek
        </button>
      </div>
      {open && (
        <button className="text-white flex transition-transform justify-between bg-gray-900 bg-opacity-60 px-8 py-4 w-full">
          Uni paychek
          {rightArrow}
        </button>
      )}
    </header>
  );
};

export default Header;
