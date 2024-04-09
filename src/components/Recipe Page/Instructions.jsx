/* eslint-disable react/prop-types */
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button";
import { useState } from "react";

function Instructions({ selectedFood }) {
  const [isInstructionOpen, setIsInstructionOpen] = useState(false);

  function handleInstructionOpen() {
    setIsInstructionOpen((curState) => !curState);
  }
  return (
    <div className="mt-4 sm:w-[55%]">
      <div className="flex ">
        <Button
          paddingX="px-2.5 mt-10"
          content="View Instructions"
          onClick={handleInstructionOpen}
        >
          <IoIosArrowDown className="text-lg" />
        </Button>
      </div>

      {isInstructionOpen && (
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-gray-900 mt-5 underline underline-offset-4">
            Instructions
          </h3>

          <ul className="mt-4 text-lg font-medium space-y-3">
            {selectedFood.strInstructions
              .split(".")
              .filter((instr) => instr)
              .map((instr, i) => (
                <li key={i}>
                  <span className="text-base">{i + 1}. </span>
                  {instr}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Instructions;
