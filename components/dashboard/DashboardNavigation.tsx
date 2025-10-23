"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "../buttons/PrimaryButton";
import Logo from "../global/Logo";
import CollapseIcon from "../../public/icons/CollapseIcon";
import DisconnectIcon from "../../public/icons/DisconnectIcon";
import OverviewIcon from "../../public/icons/OverviewIcon";
import UserIcon from "../../public/icons/UserIcon";
import WithdrawIcon from "../../public/icons/WithdrawIcon";
import MenuItem from "./MenuItem";
import { useLayoutEffect, useRef, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export default function DashboardNavigation() {
  const [isLoading, setIsLoading] = useState(false);
  const { disconnect, select } = useWallet();
  const router = useRouter();

  const lastVisitedMenu = useRef<string>('');

  useLayoutEffect(() => {
    lastVisitedMenu.current = localStorage.getItem("selectedMenu") || 'Overview';
  }, [])
  
    const handleDisconnect = async () => {
      setIsLoading(true);
  
      try {
        await disconnect();   // disconnects wallet session
        select(null);         // clears wallet selection
        
        router.replace('sign-in');
        setTimeout(() => setIsLoading(false), 1000);
      } catch (err) {
        console.error("Error disconnecting wallet:", err);
      }
    }

  return (
    <nav className="relative px-[1.25rem] py-[1.375rem] bg-mybg w-[16.5rem] h-screen">
      <div className="flex justify-between items-center mb-[5rem]">
        <Logo />

        <button className="opacity-45 hover:opacity-100 transition-opacity duration-[.25s]">
          <CollapseIcon />
        </button>
      </div>

      {/* Platform */}
      <div className="mb-[3.75rem]">
        <span className="text-label-gray block mb-[1.25rem]">Platform</span>
        <div className="flex flex-col gap-y-[0.5rem]">
          <MenuItem
            label="Overview"
            icon={<OverviewIcon />}
            activities={30}
            preselect={lastVisitedMenu.current === "Overview"}
            handleClick={() => router.push('/dashboard')}
          />

          <MenuItem
            label="Withdrawals"
            icon={<WithdrawIcon />}
            activities={5}
            preselect={lastVisitedMenu.current === "Withdrawals"}
            handleClick={() => router.push('/dashboard/withdrawals')}
          />
        </div>
      </div>

      {/* Setup */}
      <div>
        <span className="text-label-gray block mb-[1.25rem]">Setup</span>
        <MenuItem
          label="Settings"
          icon={<UserIcon />}
          preselect={lastVisitedMenu.current === "Settings"}
          handleClick={() => router.push('/dashboard/settings')}
        />
      </div>

      <div className="absolute bottom-[8rem] left-[1.25rem] right-[1.25rem] aspect-[1.097] bg-black rounded-[20px]">
        <div className="absolute bg-dark-gray left-[0.625rem] right-[0.625rem] h-[3.4375rem] 
        rounded-[12px] bottom-[0.625rem]">

        </div>
      </div>

      <span className="absolute left-[1.25rem] bottom-[1.375rem]">
        <PrimaryButton
          label="Disconnect"
          Icon={<DisconnectIcon />}
          isLoading={isLoading}
          handleClick={handleDisconnect}
        />
      </span>
    </nav>
  )
}