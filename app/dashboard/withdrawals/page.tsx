"use client";

import InfoCard from "../../../components/dashboard/InfoCard";
import CardWithButton from "../../../components/dashboard/CardWithButton";
import EditIcon from "../../../public/icons/EditIcon";

export default function Withdrawals() {

  const handleUpdateAddress = () => {

  }

  return (
    <div className="py-[1.375rem] min-w-full max-w-[calc(100%-17.75rem)] h-screen pr-[1.375rem] flex 
    flex-col gap-y-[1.25rem] overflow-clip">
      <span className="flex flex-col gap-y-[0.5rem] mb-[3.75rem]">
        <h2 className="text-title">Withdrawals</h2>
        <span className="text-label-gray">Send your tokens to your local wallet.</span>
      </span>

      <div className="flex items-center gap-x-[3px] min-h-[15.5rem]">
        <div className="w-[30%] h-full">
          <InfoCard
            firstLabel="All Time Donations"
            value={0}
            toUSD={0}
            lastUpdated={(Math.floor(Date.now() / 1000) - 120)} // convert to seconds
          />
        </div>
        <div className="w-[30%] h-full">
          <InfoCard
            firstLabel="Wallet"
            value={0}
            toUSD={0}
            lastUpdated={(Math.floor(Date.now() / 1000) - 120)} // convert to seconds
          />
        </div>
        <div className="w-[40%] h-full min-w-0">
          <CardWithButton
            label="Wallet Address"
            value={'DyT6CqGVNHHVm9WTkVZJg3Mw4YQ9C9jh3MAx5rKkPPM2'}
            buttonLabel="Update"
            hideUnit={true}
            buttonIcon={<EditIcon />}
            handleClick={handleUpdateAddress}
          />
        </div>
      </div>
    </div>
  )
}