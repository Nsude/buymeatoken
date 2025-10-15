"use client";


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

  const handleLocalClick = (e: React.MouseEvent | React.TouchEvent) => {
    const {currentTarget} = e;
    handleClick();

    const selectedItem = document.querySelector(".navigation-menuitem.selected-menuitem");
    if (selectedItem) selectedItem.classList.remove("selected-menuitem");

    currentTarget.classList.add("selected-menuitem");
  }

  return (
    <button 
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