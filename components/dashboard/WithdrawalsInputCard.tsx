"use client";

import { useState } from "react";
import WalletIcon from "../../public/icons/WalletIcon";
import WithdrawIcon from "../../public/icons/WithdrawIcon";
import PrimaryButton from "../buttons/PrimaryButton";
import CustomInputElement from "../global/CustomInput";
import CopyButton from "./CopyButton";

interface Props {
  handleSubmit: () => void;
}

export default function WithdrawalsInputCard(
  {
    handleSubmit,
  }: Props
) {
  const [withdrawalAmount, setWithdrawalAmount] = useState('');

  return (
    <div className="relative w-full h-fit bg-card-bg-gradient rounded-[8px] p-[0.9375rem]">
      {/* card icon */}
      <span className="absolute right-[0.9375rem] top-[0.9375rem] h-[2.5rem] w-[2.5rem]
      bg-dark-gray rounded-[6px] flex items-center justify-center z-10">
        <WalletIcon />
      </span>

      {/* Header */}
      <div className="flex flex-col gap-y-[0.9375rem] mb-[4rem]">
        <span>Withdraw</span>
        <span className="text-label-gray text-wrap w-[80%]">
          Send your tokens to your local wallet.
        </span>
      </div>

      {/* Inputs */}
      <div className="flex flex-col gap-y-[1.25rem] mb-[3rem]">
        {/* Input 1 */}
        <div className="flex items-end gap-x-[3px]">
          <CustomInputElement
            placeHolder="0.0"
            label="Amount"
            inputType="number"
            onValueChange={() => {}}
            addon={<span className="text-label-gray">SOL</span>}
          />
          <div className="w-[30%] h-[2.8125rem] rounded-[8px] px-[0.75rem] bg-dark-gray relative flex items-center text-label-gray">
            <span>0.00</span>
            <span className="absolute right-1.5 top-1/2 -translate-1/2">$</span>
          </div>
        </div>

        {/* Input 2 */}
        <div className="flex items-end gap-x-[3px]">
          <CustomInputElement
            placeHolder="type here"
            label="Wallet Address"
            value="DyT6CqGVNHHVm9WTkVZJg3Mw4YQ9C9jh3MAx5rKkPPM2"
            onValueChange={() => { }}
            readonly={true}
            addon={<CopyButton />}
          />
        </div>
      </div>

      <PrimaryButton
        label="Withdraw"
        Icon={<WithdrawIcon />}
        handleClick={handleSubmit}
      />
    </div>
  )
}