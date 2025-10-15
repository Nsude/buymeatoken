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
      <div className="flex items-center gap-x-[3px]">
        <div className="w-[40%]">
          <CreateLinkCard />
        </div>
        <div className="w-[30%]">
          <AllTimeDonationsCard />
        </div>
        <div className="w-[30%]">
          <BalanceCard />
        </div>
      </div>
    </div>
  )
}