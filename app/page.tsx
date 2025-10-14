"use client";
import gsap from "gsap";
import PrimaryButton from "../components/buttons/PrimaryButton";
import DisconnectIcon from "../public/icons/DisconnectIcon";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Home() {
  return (
    <div>
      <PrimaryButton 
        label="Connect Wallet"
        Icon={<DisconnectIcon />}
        handleClick={() => console.log("connect wallet")}
      />
    </div>
  )
}