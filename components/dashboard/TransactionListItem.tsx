import DotIcon from "../../public/icons/DotIcon"
import ChevronRightIcon from "../../public/icons/ChevronRight";
import LogoTokenIcon from "../../public/icons/LogoTokenIcon";

export default function TransactionListItem() {
  return (
    <div className="relative px-[3.75rem] w-full bg-t-list-bg rounded-[6px] min-h-[3.75rem]
      flex items-center justify-between snap-start">
      <div className="flex items-center gap-x-[12.5rem]">
        <span className="text-label-gray">001</span>

        <div className="flex items-center gap-x-[0.5rem]">
          <div className="h-[2.5rem] w-[2.5rem] rounded-[6px] bg-black 
          flex justify-center items-center">

          </div>

          <div className="flex flex-col gap-y-[6px] w-[65%]">
            <span>Acre</span>
            <div className="w-full flex items-center gap-x-[0.625rem]">
              <span className="text-smallest-label text-label-gray truncate 
              tracking-[0.03ch]">
                DyT6CqGVNHHVm9WTkVZJg3Mw4YQ9C9jh3MAx5rKkPPM2
              </span>
              <DotIcon />
              <span className="text-nowrap text-smallest-label tracking-[0.03ch]">
                Today, 12:38 PM
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Token Logo */}
      <LogoTokenIcon color="#4A4A4A" size={22} />

      <div>
        <div className="flex items-center justify-end gap-x-[0.625rem] mb-1.5">
          <span>{0.382} &nbsp; {"ACR"}</span>
          <ChevronRightIcon size={18} />
          <span>{0.12} &nbsp; {"Sol"}</span>
        </div>
        <div className="flex gap-x-[0.625rem] items-center text-smallest-label 
        tracking-[0.03ch]">
          <span className="text-label-gray">Gas Fee:&nbsp; {0.003} {"ARC"}</span>
          <DotIcon />
          <span className="text-accent-green">Platfrom:&nbsp; {3}%</span>
        </div>
      </div>
    </div>
  )
}