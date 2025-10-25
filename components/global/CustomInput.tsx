"use client";

import { useState, useEffect } from "react";

interface Props {
  readonly?: boolean;
  label?: string;
  placeHolder: string;
  value?: string | number;
  inputType?: "text" | "number";
  onValueChange?: (value: string | number) => void;
  addon?: React.ReactNode; // add elements to the input and ctrl what happens when they're clicked
  onAddonClick?: () => void;
  regex?: RegExp; 
  errorMsg?: string;
  onValidationChange?: (isValid: boolean) => void; // used to disable or allow sumbition
}

export default function CustomInputElement({
  readonly,
  placeHolder,
  label,
  value = "",
  inputType = "text",
  onValueChange,
  addon,
  onAddonClick,
  regex,
  errorMsg,
  onValidationChange,
}: Props) {
  const [internalValue, setInternalValue] = useState<string | number>(value);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const newValue =
      inputType === "number" ? (val === "" ? "" : Number(val)) : val;

    setInternalValue(newValue);
    onValueChange?.(newValue);

    // ✅ validation check
    if (regex) {
      const valid = regex.test(val);
      setIsValid(valid);
      onValidationChange?.(valid);
    }
  };

  return (
    <div className="w-full flex flex-col gap-y-[0.9375rem] relative">
      {label && <span className="ml-1.5">{label}</span>}

      <div className="relative">
        <input
          type={inputType}
          style={{
            borderColor: 
              !isValid && internalValue.toString().trim() !== "" ? "red" : ""
          }}
          className={`no-spin h-[2.8125rem] w-full rounded-[8px] px-[0.75rem]
            focus:border-accent-blue outline-none bg-dark-gray truncate
            ${readonly ? "opacity-60" : "border-[2px] border-border-dark-gray"}
          `}
          readOnly={readonly}
          placeholder={placeHolder}
          value={internalValue}
          onChange={handleChange}
        />

        {addon && (
          <span
            role={onAddonClick ? "button" : ""}
            onClick={onAddonClick}
            className="absolute right-[0.75rem] top-1/2 -translate-y-1/2 z-10"
          >
            {addon}
          </span>
        )}

        {addon && readonly && (
          <span className="absolute left-0 right-0 top-0 bottom-0 z-5 bg-gradient-to-r from-transparent to-dark-gray to-90% rounded-[8px]" />
        )}
      </div>

      {/* Optional inline error message */}
      {(!isValid && internalValue.toString().trim() !== "")  && (
        <span className="text-red-500 text-sm ml-1.5 absolute bottom-[-1.8rem]">
          { errorMsg || "Invalid input format"}
        </span>
      )}
    </div>
  );
}
