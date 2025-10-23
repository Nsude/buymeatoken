"use client";

import { useRouter } from "next/navigation";
import Logo from "../../components/global/Logo";
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function SignIn() {
  const {
    connected,
    publicKey,
  } = useWallet();
  const router = useRouter();

  // Redirect to dashboard when wallet connects
  useEffect(() => {
    if (connected && publicKey) {
      router.push('/dashboard');
    }
  }, [connected, publicKey, router]);

  return (
    <div className="h-screen w-full relative overflow-clip">
      <div className="relative h-full w-full flex flex-col justify-center 
        items-center gap-y-[2.5rem] overflow-clip z-10 bg-black/15 
        backdrop-blur-[100px]">
        <div className="flex flex-col items-center gap-y-1.5">
          <Logo />
          <span className="text-label-gray">Send tokens, not coffee.</span>
        </div>

        <div className="flex items-center gap-x-[3px] cursor-pointer">
          <div
            className={`primary-button
            pl-[1.125rem] pr-[1.15625rem] h-[2.8125rem] rounded-[8px] bg-dark-gray 
            flex justify-center items-center gap-x-[4px] `}>
            <WalletMultiButton />
          </div>
          <span className="primary-button-rect h-[2.5rem] w-[7px] bg-dark-gray rounded-[2px]" />
        </div>


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