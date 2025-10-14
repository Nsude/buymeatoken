"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Logo from "../../components/global/Logo";
import WalletIcon from "../../public/icons/WalletIcon";
import { useState } from "react";
import LoadingIcon from "../../public/icons/LoadingIcon";

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    
    // connect wallet logic
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // reroute
    router.replace('/dashboard');
    setIsLoading(false);
  }

  return (
    <div className="h-screen w-full relative overflow-clip">
      <div className="relative h-full w-full flex flex-col justify-center 
        items-center gap-y-[2.5rem] overflow-clip z-10 bg-black/15 
        backdrop-blur-[100px]">
        <div className="flex flex-col items-center gap-y-1.5">
          <Logo />
          <span className="text-label-gray">Send tokens, not coffee.</span>
        </div>

        <PrimaryButton
          label="Connect Wallet"
          Icon={isLoading ? <LoadingIcon /> : <WalletIcon />}
          handleClick={handleSignIn}
        />

      </div>

      {/* Blops */}
      <span className="absolute bottom-0 left-0 w-[25%] aspect-square 
      bg-label-gray/80 rounded-full" />

      <span className="absolute -top-[10%] right-0 w-[25%] aspect-square 
      bg-label-gray/80 rounded-full" />

      <span className="absolute -bottom-[15%] right-0 w-[25%] aspect-square 
        bg-accent-blue/40 rounded-full blur-[60px]" />
    </div>
  )
}