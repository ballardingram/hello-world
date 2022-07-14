import { useState } from "react";

function Switch() {
  const [toggle, setToggle] = useState(true);
  const toggleClass = "transform translate-x-5 bg-cyan-800";
  return (
    <>
      <div className="flex flex-col justify-center">
        <div
          className="w-10 h-5 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
          onClick={() => {
            setToggle(!toggle);
          }}>
          <div
            className={
              "bg-white h-3 w-3 rounded-full transform duration-300 ease-in-out" +
              (toggle ? null : toggleClass)
            }
            >
          </div>
        </div>
      </div>
    </>
  );
}

export default Switch;


