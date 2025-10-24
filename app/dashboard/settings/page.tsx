"use client";

import { useState } from "react";
import { useCurrentUser } from "../../../components/contexts/UserContextProvider";
import SettingInputCard from "../../../components/dashboard/SettingsInputCard";
import UserIcon from "../../../public/icons/UserIcon";
import { useLoadingButton } from "../../../components/contexts/ButtonLoadingContext";

export default function Settings() {
  const { user } = useCurrentUser();
  const {setLoadingButton} = useLoadingButton();

  // update update wallet address
  const updateWalletAddress = async (value: string) => {
    if (!user) return;

    // set button loading state
    setLoadingButton("Update Wallet Address", true);

    const endpoint =
      "https://buymeatoken-production.up.railway.app/api/user/changeWithdrawalAddress";

    const addressFormData = new FormData();
    addressFormData.append("address", value);

      try {
      const authToken = sessionStorage.getItem("authToken");
      if (!authToken) throw new Error("Auth Token is undefined");

      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {"auth-token": authToken},
        body: addressFormData
      })

      const result = await response.json();
      console.log(result);

      // TODO: success toast
    } catch (error) {
      console.error("Error updating wallet address: ", error);
      // TODO: Display toast notification
    } finally {
      setLoadingButton("Update Wallet Address", false);
    }
  }

  // update username
  const updateUsername = async (value: string) => {
    if (!user) return;

    // set button loading state
    setLoadingButton("Update Username", true);

    const endpoint =
      "https://buymeatoken-production.up.railway.app/api/user/updateUsername";

    const usernameFormData = new FormData();
    usernameFormData.append("username", value);

      try {
      const authToken = sessionStorage.getItem("authToken");
      if (!authToken) throw new Error("Auth Token is undefined");

      const response = await fetch(endpoint, {
        method: "PUT",
        headers: {"auth-token": authToken},
        body: usernameFormData
      })

      const result = await response.json();
      console.log(result);

      // TODO: success toast
    } catch (error) {
      console.error("Error updating wallet address: ", error);
      // TODO: Display toast notification
    } finally {
      setLoadingButton("Update Username", false);
    }
  }

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
            makeFirstInputReadonly={true}
            secondInputLabel="New"
            firstInputValue={user?.username || ""}
            secondPlaceholder="new username"
            buttonTitle="Update Username"
            // allow at least 3 characters and prevent hyphens and dots at either end
            secondInputRegex={/^(?![._-])[a-zA-Z0-9._-]{3,}(?<![._-])$/} 
            handleSubmit={updateUsername}
          />
        </div>
        <div className="w-[55%]">
          <SettingInputCard
            cardLabel="Update Wallet Address"
            cardDesc="This is the address your tokens will be sent to when you withdraw."
            cardIcon={<UserIcon />}
            firstInputLabel="Current"
            secondInputLabel="New"
            firstInputValue={user?.withdrawAddress || ''}
            makeFirstInputReadonly={true}
            secondPlaceholder="paste address"
            buttonTitle="Update Wallet Address"
            secondInputRegex={/^[1-9A-HJ-NP-Za-km-z]{43,44}$/} // solana base 58 address regex
            handleSubmit={updateWalletAddress}
          />
        </div>
      </div>

    </div>
  )
}