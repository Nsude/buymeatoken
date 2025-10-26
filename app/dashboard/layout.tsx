"use client";

import { useEffect, useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import DisconnectIcon from "../../public/icons/DisconnectIcon";
import DashboardNavigation from "../../components/dashboard/DashboardNavigation";
import { useRouter } from "next/navigation";
import "./dashboard.css";
import { useWallet } from "@solana/wallet-adapter-react";
import { UserContextProvider } from "../../components/contexts/UserContextProvider";
import { BalanceProvider } from "../../components/contexts/BalanceContext";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const { disconnect, select, connected, connecting, wallet } = useWallet();
  const router = useRouter();

  useEffect(() => {
    if (!connecting && !connected && !wallet) {
      router.replace('/sign-in');
      setTimeout(() => setIsLoading(false), 1000);
    }

  }, [router, connected, connecting, wallet])

  const handleDisconnect = async () => {
    setIsLoading(true);

    try {
      await disconnect();   // disconnects wallet session
      select(null);         // clears wallet selection

    } catch (err) {
      console.error("Error disconnecting wallet:", err);
    }
  }

  return (
    <UserContextProvider>
      <div className="w-full h-screen overflow-clip relative flex items-start gap-x-[1.25rem]">
        <div className="flex-1">
          <DashboardNavigation />
        </div>

        <div className="w-full h-full">
          <BalanceProvider>
            {children}
          </BalanceProvider>
        </div>

        <span className="absolute right-[1.25rem] top-[1.375rem]">
          <PrimaryButton
            label="Disconnect"
            Icon={<DisconnectIcon />}
            isLoading={isLoading}
            handleClick={handleDisconnect}
          />
        </span>
      </div>
    </UserContextProvider>
  )
}