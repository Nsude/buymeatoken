"use client";

interface Props {
  readonly?: boolean,
  placeHolder: string,
  value: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function CustomInputElement(
  {
    readonly, 
    placeHolder,
    value,
    handleChange
  }: Props
) {
  return (
    <input 
      type="text" 
      className={`h-[2.8125rem] w-full rounded-[8px] px-[0.75rem]
        focus:border-accent-blue outline-none
        ${readonly ? '' : 'border-[1.3px] border-border-dark-gray'}
      `}
      readOnly={readonly}
      placeholder={placeHolder}
      value={value}
      onChange={handleChange}
    />
  )
}