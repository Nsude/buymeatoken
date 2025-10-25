import WalletIcon from "../../public/icons/WalletIcon";
import { getTimeAgo } from "../../utility/timeAgo";

interface Props {
  firstLabel: string;
  value: number;
  toUSD: number;
  lastUpdated?: number;
}

export default function InfoCard(
  {
    firstLabel,
    value,
    toUSD,
    lastUpdated
  }: Props
){
  return (
    <div className="relative flex justify-between w-full h-full bg-card-bg-gradient 
    rounded-[6px] p-[0.9375rem]">
      {/* Left side */}
      <div className="flex flex-col justify-between w-[80%]">
        <div className="flex flex-col gap-y-[0.9375rem] text-label-gray">
          <span>{firstLabel}</span>
          <span className="flex items-end gap-x-[0.625rem]">
            <span className="text-title-large leading-[0.9] text-white truncate">
              {value.toFixed(1)}
            </span>
            <span>SOL</span>
          </span>
        </div>

        <div className="flex flex-col gap-y-[0.9375rem] text-label-gray">
          <span>USD</span>
          <span className="flex items-end gap-x-[0.625rem]">
            <span className="text-title-large leading-[0.9] text-white truncate">
              {toUSD.toFixed(2)}
            </span>
            <span>$</span>
          </span>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col justify-between items-end w-[20%]">
        <span className="h-[2.5rem] w-[2.5rem]
        bg-dark-gray rounded-[6px] flex items-center justify-center">
          <WalletIcon />
        </span>

        { lastUpdated &&
          <span className="text-label-gray"> {getTimeAgo(lastUpdated)} </span>
        }
      </div>
    </div>
  )
}