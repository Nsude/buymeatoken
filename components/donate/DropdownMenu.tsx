"use client";

import DropdownIcon from "../../public/icons/DropdownIcon";

export default function DropdownMenu() {
  return (
    <div className="relative">
      <button className="flex items-center gap-x-2">
        <span className="text-label-gray">SOL</span>
        <DropdownIcon />
      </button>

      <div className="absolute w-[16rem] h-[10rem] rounded-[8px] border-2 
      border-border-dark-gray right-[-0.75rem] top-[2.5rem] bg-dark-gray/20 
      backdrop-blur-[4px]">

      </div>
    </div>
  )
}