"use client";

interface Props {
  label: string;
  handleClick: () => void;
  preselect?: boolean
}

export default function CardButton({label, handleClick, preselect}: Props) {

  const localHandleClick = (e: React.MouseEvent | React.TouchEvent) => {
    handleClick();
    const {currentTarget} = e;

    const selectedItem = document.querySelector(".card-button.selected-card-button");
    if (selectedItem) selectedItem.classList.remove("selected-card-button");

    currentTarget.classList.add("selected-card-button");
  }

  return (
    <button 
      onClick={localHandleClick}
      className={`card-button px-[0.625rem] py-[0.5rem] rounded-full border-[1.3px] 
      border-border-dark-gray truncate ${preselect ? 'selected-card-button' : ''}`}>
        {label}
    </button>
  )
}