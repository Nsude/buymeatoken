"use client";

import { useEffect, useRef } from "react";


interface Props {
  icon: React.ReactNode;
  label: string;
  activities?: number;
  preselect?: boolean;
  handleClick: () => void;
}

export default function MenuItem(
  {
    icon,
    label,
    activities,
    preselect,
    handleClick
  } : Props
) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!buttonRef.current) return;
    const selelctedMenu = localStorage.getItem("selectedMenu");
    const isCurrent = label === selelctedMenu;

    if (!isCurrent) return;
    const btn = buttonRef.current as HTMLButtonElement;
    selectNewMenu(btn);

  }, [label, buttonRef])

  // deselect prev menu and select new one
  const selectNewMenu = (newBtn: HTMLButtonElement ) => {
    const selectedItem = document.querySelector(".navigation-menuitem.selected-menuitem");
    if (selectedItem) selectedItem.classList.remove("selected-menuitem");

    newBtn.classList.add("selected-menuitem");
  }

  const handleLocalClick = (e: React.MouseEvent | React.TouchEvent) => {
    const {currentTarget} = e;
    handleClick();

    // update local storage
    localStorage.setItem('selectedMenu', label);

    selectNewMenu(currentTarget as HTMLButtonElement);
  }

  return (
    <button 
      ref={buttonRef}
      onClick={handleLocalClick}
      className={`navigation-menuitem relative flex items-center 
      gap-x-[0.5rem] rounded-[8px] h-[2.8125rem] w-full p-[5px] border-[1.3px] 
      border-border-dark-gray ${preselect ? 'selected-menuitem' : ''}`}>
      {/* Icon */}
      <div className="flex justify-center items-center h-[2.1875rem] aspect-square 
      rounded-[6px] bg-dark-gray">
        {icon}
      </div>

      <span>{label}</span>
      {activities && <span className="activity-span absolute right-[5px] top-1/2 -translate-y-1/2 
      bg-mybg border border-border-dark-gray rounded-full p-1.5 
      text-smallest-label">{activities}</span>}
    </button>
  )
}