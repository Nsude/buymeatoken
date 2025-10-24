"use client";

import { useRouter } from "next/navigation";
import Logo from "../../components/global/Logo";
import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import bs58 from "bs58";

export default function SignIn() {
  const { connected, publicKey, signMessage } = useWallet();
  const router = useRouter();

  // Redirect to dashboard when wallet connects
  useEffect(() => {
    if (!connected || !publicKey || !signMessage) return;

    const createUser = async () => {
      const addressFormData = new FormData();
      addressFormData.append("address", publicKey.toString());

      const signFormData = new FormData();
      signFormData.append("address", publicKey.toString());

      try {
        const userResponse =
          await fetch('https://buymeatoken-production.up.railway.app/api/user', {
            method: "POST",
            body: addressFormData
          })

        const message = await userResponse.json();
        // useWallet's signMessage only takes in a uInt8Array param
        // hence the econding with TextEncoder which returns a uInt8Array
        const encodedMessage = new TextEncoder().encode(message.message);
        const signature = await signMessage(encodedMessage);
        
        // Convert to base58 (proper Solana format)
        const signatureBase58 = bs58.encode(signature);
        signFormData.append("signature", signatureBase58);

        await fetch('https://buymeatoken-production.up.railway.app/api/user/verify', {
          method: "PUT",
          body: signFormData
        })

        router.replace('/dashboard');
      } catch (error) {
        console.error("Sign in error: ", error);
        // display toast notification
      }
    }

    createUser();

  }, [connected, publicKey, router, signMessage]);

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