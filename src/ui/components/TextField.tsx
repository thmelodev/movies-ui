import React, { useState } from "react";

export interface TextFieldProps {
  id: string;
  label?: string;
  placeholder?: string;
  finalIcon?: React.ReactNode;
  onChange?: (value: string) => void;
  type?: React.HTMLInputTypeAttribute | undefined | "textarea";
}

const TextField = ({ label, placeholder, finalIcon, onChange, id, type = "text" }: TextFieldProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  }

  return (
    <div className="flex flex-col items-start justify-start gap-2.5 w-full relative">
      {label && <label htmlFor={id} className="font-bold text-[12.8px]">{label}</label>}
      <div className="w-full">
        {type === "textarea" ? (
          <textarea id={id}
            className="w-full min-h-11 resize-y"
            placeholder={placeholder}
            onChange={(e) => {
              handleChange(e)
              e.target.style.height = "auto"
              e.target.style.height = (e.target.scrollHeight + 2) + "px"
            }}
            value={value}
          />
        ) : (
          <input
            id={id}
            type={type === "number" ? "text" : type}
            className="w-full resize-none dark:scheme-dark appearance-none"
            style={{ textIndent: 0, paddingRight: finalIcon ? 40 : 15 }}
            placeholder={placeholder}
            onChange={(e) => {
              if (type === "number") {
                const numericValue = e.target.value.replace(/\D/g, '');
                handleChange({ ...e, target: { ...e.target, value: numericValue } } as React.ChangeEvent<HTMLInputElement>);
              } else {
                handleChange(e);
              }
            }}
            value={value}
          />
        )}
        {finalIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            {finalIcon}
          </div>
        )}
      </div>
    </div>
  )
}

export default TextField;