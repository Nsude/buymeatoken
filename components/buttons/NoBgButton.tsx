"use client";

interface Props {
  label: string;
  handleClick: () => void;
  preselect?: boolean
}

export default function NoBgButton({label, handleClick, preselect}: Props) {

  const localHandleClick = (e: React.MouseEvent | React.TouchEvent) => {
    handleClick();
    const {currentTarget} = e;

    const selectedItem = document.querySelector(".nobg-button.selected-nobg-button");
    if (selectedItem) selectedItem.classList.remove("selected-nobg-button");

    currentTarget.classList.add("selected-nobg-button");
  }

  return (
    <button 
      onClick={localHandleClick}
      className={`nobg-button text-label-gray ${preselect ? 'selected-nobg-button' : ''}`}>
        {label}
    </button>
  )
}