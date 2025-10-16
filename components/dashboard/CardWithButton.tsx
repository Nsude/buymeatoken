"use client";

import WalletIcon from "../../public/icons/WalletIcon";
import PrimaryButton from "../buttons/PrimaryButton";

interface Props {
  label: string;
  buttonLabel: string;
  buttonIcon: React.ReactNode;
  value: number | string;
  hideUnit?: boolean;
  handleClick: () => void;
}

export default function CardWithButton(
  { 
    value, 
    handleClick,
    buttonLabel,
    buttonIcon,
    hideUnit,
    label,
  }: Props
) {
  return (
    <div className="relative flex justify-between w-full h-full bg-card-bg-gradient 
    rounded-[6px] p-[0.9375rem]">
      {/* Left side */}
      <div className="flex flex-col justify-between w-[85%]">
        <div className="flex flex-col gap-y-[0.9375rem] text-label-gray">
          <span>{label}</span>
          <span className="flex items-end gap-x-[0.625rem] ">
            <span className={` text-white truncate max-w-full
              ${hideUnit ? 'leading-[1.5] text-title' : 'leading-[0.9] text-title-large'}
            `}>
              {value === 0 ? "0.0" : value}
            </span>
            {!hideUnit && <span>SOL</span>}
          </span>
        </div>

        <PrimaryButton 
          label={buttonLabel}
          Icon={buttonIcon}
          handleClick={handleClick}
        />
      </div>

      {/* right side */}
      <span className="h-[2.5rem] max-w-[2.5rem] basis-[20%]
        bg-dark-gray rounded-[6px] flex items-center justify-center">
        <WalletIcon />
      </span>
    </div>
  )
}