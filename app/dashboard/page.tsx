"use client";

import { useRouter } from "next/navigation";
import InfoCard from "../../components/dashboard/InfoCard";
import CardWithButton from "../../components/dashboard/CardWithButton";
import CreateLinkCard from "../../components/dashboard/CreateLinkCard";
import Transactions from "../../components/dashboard/Transactions";
import WithdrawIcon from "../../public/icons/WithdrawIcon";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [userBalance, setUserBalance] = useState<number>(0);
  const [balanceToUSD, setBalanceToUSD] = useState<number>(0);

  useEffect(() => {
    const getUserBalance = async () => {
      if (!publicKey) return;
  
      try {
        const lamports = await connection.getBalance(publicKey);
        const balance = lamports / LAMPORTS_PER_SOL;
        setUserBalance(balance);


        // convert to USD
        const currentUSDValueEndpoint = 
          "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
        const response = await fetch(currentUSDValueEndpoint);
        const data = await response.json();
        const {usd} = data.solana;
        
        setBalanceToUSD(usd * balance);
      } catch (error) {
        console.error("Error getting balance:", error);
      }
    };

    getUserBalance();
  }, [connection, publicKey])


  const handleWithdraw = () => {
    router.push('/dashboard/withdrawals');
  }

  return (
    <div className="py-[1.375rem] min-w-full max-w-[calc(100%-17.75rem)] h-screen pr-[1.375rem] 
    flex flex-col gap-y-[1.25rem] overflow-clip">
      <span className="flex flex-col gap-y-[0.5rem] mb-[3.75rem]">
        <h2 className="text-title">Overview</h2>
        <span className="text-label-gray">Setup and manage your donations.</span>
      </span>

      {/* TOP CARDS */}
      <div className="flex items-center gap-x-[3px] min-h-[15.5rem]">
        <div className="w-[40%] h-full">
          <CreateLinkCard />
        </div>
        <div className="w-[30%] h-full">
          <InfoCard
            firstLabel="All Time Donations"
            value={userBalance}
            toUSD={balanceToUSD}
            lastUpdated={(Math.floor(Date.now() / 1000) - 120)} // convert to seconds
          />
        </div>
        <div className="w-[30%] h-full">
          <CardWithButton
            label="Balance"
            value={userBalance}
            buttonLabel="Withdraw"
            buttonIcon={<WithdrawIcon />}
            handleClick={handleWithdraw}
          />
        </div>
      </div>

      <Transactions />
    </div>
  )
}