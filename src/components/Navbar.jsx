import { Menu } from "lucide-react";
import { memo, useState } from "react";
import Home from "../pages/Home";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("hot");
  const LinksNav = ["hot", "new", "rising"];

  function handleGet(e) {
    setId(e.target.id);
  }

  return (
    <>
      <div
        className={` w-full bg-[#2c3e50] fixed top-0 left-0 z-[1000] duration-500  `}
      >
        <div className="md:flex items-center justify-between container px-2  py-3   ">
          <a to="start" className="font-bold text-3xl  text-white">
            Task
          </a>

          <div
            onClick={() => setOpen(!open)}
            className=" absolute right-8 top-2 cursor-pointer md:hidden py-3  "
          >
            <Menu />
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12  absolute md:static  text-white bg-[#2c3e50] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {LinksNav.map((el, idx) => (
              <li
                className="p-4 capitalize"
                onClick={(e) => handleGet(e)}
                key={idx}
                id={el}
              >
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {id && <Home id={id} />}
    </>
  );
}

export default memo(Navbar);
