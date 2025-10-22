import TransactionListItem from "./TransactionListItem";

export default function Transactions() {
  return (
    <div className="w-full h-full overflow-clip">
      {/* titles */}
      <div className="px-[3.75rem] w-full bg-darker-bg rounded-t-[15px] h-[3.75rem]
      flex items-center justify-between mb-1.5 text-small-label text-label-gray">
        <div className="flex w-full items-center gap-x-[12.5rem]">
          <span>S/N</span>
          <div className="flex gap-x-[15.2rem] justify-between">
            <span>Token</span>
            <span className="text-nowrap">Date & Time</span>
          </div>
        </div>
        <span>Transactions</span>
      </div> 

      {/* items */}
      <div className="flex flex-col gap-y-1.5 h-[31rem] overflow-auto hide-chrome-scrollbar 
      snap-y snap-mandatory">
        <TransactionListItem />
        <TransactionListItem />
        <TransactionListItem />
        <TransactionListItem />
        <TransactionListItem />
        <TransactionListItem />
        <TransactionListItem />
        <TransactionListItem />
        <TransactionListItem />
        <TransactionListItem />
        <TransactionListItem />
      </div>
    </div>
  )
}