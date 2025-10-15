"use client";
import { useRef } from "react";
import LoadingIcon from "../../public/icons/LoadingIcon";

interface Props {
  label: string;
  Icon?: React.ReactNode;
  isLoading?: boolean;
  fullyRounded?: boolean;
  handleClick: () => void;
}

export default function PrimaryButton(
  {
    label,
    Icon,
    isLoading,
    fullyRounded,
    handleClick
  }: Props
) {
  const conRef = useRef(null); 

  return (
    <div ref={conRef} className="flex items-center gap-x-[3px]">
      <button
        onClick={handleClick}
        className={`primary-button
          pl-[1.125rem] pr-[1.15625rem] h-[2.8125rem] rounded-[8px] bg-dark-gray 
          flex justify-center items-center gap-x-[4px]
          ${fullyRounded ? 'rounded-full' : ''}
        `}
      >
        {(Icon && !isLoading) && <span> {Icon} </span>}
        {(Icon && isLoading) && <span> <LoadingIcon /> </span>}
        <span className="primary-label">{label}</span>
      </button>
      <span className="primary-button-rect h-[2.5rem] w-[7px] bg-dark-gray rounded-[2px]" />
    </div>
  )
}