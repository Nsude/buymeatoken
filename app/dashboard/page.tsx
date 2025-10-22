"use client";

import { useRouter } from "next/navigation";
import InfoCard from "../../components/dashboard/InfoCard";
import CardWithButton from "../../components/dashboard/CardWithButton";
import CreateLinkCard from "../../components/dashboard/CreateLinkCard";
import Transactions from "../../components/dashboard/Transactions";
import WithdrawIcon from "../../public/icons/WithdrawIcon";

export default function Dashboard() {
  const router = useRouter();

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
            value={0}
            toUSD={0}
            lastUpdated={(Math.floor(Date.now() / 1000) - 120)} // convert to seconds
          />
        </div>
        <div className="w-[30%] h-full">
          <CardWithButton 
            label="Balance"
            value={0}
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