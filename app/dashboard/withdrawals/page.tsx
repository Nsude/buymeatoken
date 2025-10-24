"use client";

import InfoCard from "../../../components/dashboard/InfoCard";
import CardWithButton from "../../../components/dashboard/CardWithButton";
import EditIcon from "../../../public/icons/EditIcon";
import { useRouter } from "next/navigation";
import WithdrawalsInputCard from "../../../components/dashboard/WithdrawalsInputCard";
import { useCurrentUser } from "../../../components/contexts/UserContextProvider";

export default function Withdrawals() {
  const {user} = useCurrentUser();
  const router = useRouter();

  const handleUpdateAddress = () => {
    router.push('/dashboard/settings');
  }

  return (
    <div className="py-[1.375rem] min-w-full max-w-[calc(100%-17.75rem)] h-screen pr-[1.375rem] flex 
    flex-col gap-y-[1.25rem] overflow-clip">
      <span className="flex flex-col gap-y-[0.5rem] mb-[3.75rem]">
        <h2 className="text-title">Withdrawals</h2>
        <span className="text-label-gray">Send your tokens to your local wallet.</span>
      </span>

      {/* Top Cards */}
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
            value={user?.withdrawAddress || ''}
            buttonLabel="Update"
            hideUnit={true}
            buttonIcon={<EditIcon />}
            handleClick={handleUpdateAddress}
          />
        </div>
      </div>

      {/* Withdraw Card */}
      <div className="w-[45%] 2xl:w-[40%] h-fit">
        <WithdrawalsInputCard 
          handleSubmit={() => {}}
        />
      </div>
    </div>
  )
}