"use client";

import { useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import DisconnectIcon from "../../public/icons/DisconnectIcon";
import DashboardNavigation from "../../components/dashboard/DashboardNavigation";
import { useRouter } from "next/navigation";
import "./dashboard.css";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDisconnect = async () => {
    setIsLoading(true);

    // disconnect logic
    await new Promise((resolve) => setTimeout(resolve, 2000));
    router.replace("/sign-in");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000)
  }

  return (
    <div className="w-full h-screen overflow-clip relative flex items-start gap-x-[1.25rem]">
      <div className="flex-1">
        <DashboardNavigation />
      </div>

      <div className="w-full h-full">
        {children}
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
  )
}