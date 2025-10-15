"use client";

import AllTimeDonationsCard from "../../components/dashboard/AllTimeDonationsCard";
import BalanceCard from "../../components/dashboard/BalanceCard";
import CreateLinkCard from "../../components/dashboard/CreateLinkCard";

export default function Dashboard() {
  return (
    <div className="py-[1.375rem] w-full h-full pr-[1.375rem]">
      <span className="flex flex-col gap-y-[0.5rem] mb-[5rem]">
        <h2 className="text-title">Overview</h2>
        <span className="text-label-gray">Setup and manage your donations.</span>
      </span>

      {/* TOP CARDS */}
      <div className="flex items-center gap-x-[3px] h-[17rem]">
        <div className="w-[40%] h-full">
          <CreateLinkCard />
        </div>
        <div className="w-[30%] h-full">
          <AllTimeDonationsCard 
            donations={0}
            toUSD={0}
            lastUpdated={(Math.floor(Date.now() / 1000) - 120)} // convert to seconds
          />
        </div>
        <div className="w-[30%] h-full">
          <BalanceCard 
            balance={0}
            handleWithdraw={() => {}}
          />
        </div>
      </div>
    </div>
  )
}