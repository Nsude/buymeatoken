"use client";

import EditIcon from "../../public/icons/EditIcon";
import UserIcon from "../../public/icons/UserIcon";
import PrimaryButton from "../buttons/PrimaryButton";
import CustomInputElement from "../global/CustomInput";
import CopyButton from "./CopyButton";

interface Props {
  cardLabel: string;
  cardDesc: string;
  cardIcon: React.ReactNode;
  firstInputLabel: string;
  secondInputLabel: string;
  firstPlaceholder: string;
  secondPlaceholder: string;
  makeFirstInputReadonly?: boolean;
  handleSubmit: () => void;
}

export default function SettingInputCard(
  {
    cardLabel,
    cardDesc,
    cardIcon,
    firstInputLabel,
    secondInputLabel,
    firstPlaceholder,
    secondPlaceholder,
    makeFirstInputReadonly,
    handleSubmit,
  }: Props
) {
  return (
    <div className="relative w-full h-fit bg-card-bg-gradient rounded-[8px] p-[0.9375rem]">
      {/* card icon */}
      <span className="absolute right-[0.9375rem] top-[0.9375rem] h-[2.5rem] w-[2.5rem]
      bg-dark-gray rounded-[6px] flex items-center justify-center z-10">
        {cardIcon}
      </span>

      {/* Header */}
      <div className="flex flex-col gap-y-[0.9375rem] mb-[4rem]">
        <span>{cardLabel}</span>
        <span className="text-label-gray">{cardDesc}</span>
      </div>

      {/* Inputs */}
      <div className="flex flex-col gap-y-[1.25rem] mb-[3rem]">
        {/* Input 1 */}
        <CustomInputElement
          placeHolder={firstPlaceholder}
          label={firstInputLabel}
          value=""
          handleChange={() => { }}
          readonly={makeFirstInputReadonly}
          addon={makeFirstInputReadonly ? <CopyButton /> : null}
        />

        {/* Input 2 */}
        <div className="flex items-end gap-x-[3px]">
          <CustomInputElement
            placeHolder={secondPlaceholder}
            label={secondInputLabel}
            value=""
            handleChange={() => { }}
          />
        </div>
      </div>

      <PrimaryButton
        label="Update"
        Icon={<EditIcon />}
        handleClick={handleSubmit}
      />
    </div>
  )
}