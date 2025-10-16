"use client";

import SettingInputCard from "../../../components/dashboard/SettingsInputCard";
import UserIcon from "../../../public/icons/UserIcon";

export default function Settings() {
  return (
    <div className="py-[1.375rem] min-w-full max-w-[calc(100%-17.75rem)] h-screen 
    pr-[1.375rem] overflow-clip">
      <span className="flex flex-col gap-y-[0.5rem] mb-[5rem]">
        <h2 className="text-title">Settings</h2>
        <span className="text-label-gray">Update your account details.</span>
      </span>

      <div className="flex w-full gap-x-[3px]">
        <div className="w-[45%]">
          <SettingInputCard
            cardLabel="Socials Username"
            cardDesc="This will be used for your donation link and screen."
            cardIcon={<UserIcon />}
            firstInputLabel="Current"
            secondInputLabel="New"
            firstPlaceholder="Meshach"
            secondPlaceholder="new username"
            handleSubmit={() => { }}
          />
        </div>
        <div className="w-[55%]">
          <SettingInputCard
            cardLabel="Update Wallet Address"
            cardDesc="This is the address your tokens will be sent to when you withdraw."
            cardIcon={<UserIcon />}
            firstInputLabel="Current"
            secondInputLabel="New"
            firstPlaceholder="DyT6CqGVNHHVm9WTkVZJg3Mw4YQ9C9jh3MAx5rKkPPM2"
            makeFirstInputReadonly={true}
            secondPlaceholder="paste address"
            handleSubmit={() => { }}
          />
        </div>
      </div>

    </div>
  )
}