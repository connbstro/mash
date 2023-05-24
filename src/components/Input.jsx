import React from "react";

const Input = () => {
  return (
    <div className="px-2">
      <div className="flex flex-wrap -mb-4">
        <div className="w-full sm:w-1/3 mb-4 px-2">
          <input
            type="text"
            placeholder="input"
            className="border-2 border-black h-12 w-full"
          ></input>
        </div>
        <div className="w-full sm:w-1/3 mb-4 px-2">
          <input
            type="text"
            placeholder="input"
            className="border-2 border-black h-12 w-full"
          ></input>
        </div>
        <div className="w-full sm:w-1/3 mb-4 px-2">
          <input
            type="text"
            placeholder="input"
            className="border-2 border-black h-12 w-full"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Input;
