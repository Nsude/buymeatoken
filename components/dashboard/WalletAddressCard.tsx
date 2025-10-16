"use client";

import WalletIcon from "../../public/icons/WalletIcon";
import WithdrawIcon from "../../public/icons/WithdrawIcon";
import PrimaryButton from "../buttons/PrimaryButton";

interface Props {
  address: number;
  handleUpdateAddress: () => void;
}

export default function WalletAddressCard({ address, handleUpdateAddress }: Props) {
  return (
    <div className="relative flex justify-between w-full h-full bg-card-bg-gradient 
    rounded-[6px] p-[0.9375rem]">
      {/* Left side */}
      <div className="flex flex-col justify-between w-[80%]">
        <div className="flex flex-col gap-y-[0.9375rem] text-label-gray">
          <span>Balance</span>
          <span className="flex items-end gap-x-[0.625rem]">
            <span className="text-title-large leading-[0.9] text-white truncate">
              {address === 0 ? "0.0" : address}
            </span>
            <span>SOL</span>
          </span>
        </div>

        <PrimaryButton 
          label="withdraw"
          Icon={<WithdrawIcon />}
          handleClick={handleUpdateAddress}
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