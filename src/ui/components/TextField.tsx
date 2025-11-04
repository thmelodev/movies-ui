import { useState } from "react";

export interface TextFieldProps {
  id: string;
  label?: string;
  placeholder?: string;
  finalIcon?: React.ReactNode;
  onChange?: (value: string) => void;
}

const TextField = ({ label, placeholder, finalIcon, onChange, id }: TextFieldProps) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  }

  return (
    <div className="flex flex-col items-start justify-start gap-2.5 w-full relative">
      {label && <label htmlFor={id} className="font-bold text-[12.8px]">{label}</label>}
      <div className="w-full">
        <input id={id} type="text" className="w-full h-11" style={{ textIndent: 0, paddingRight: "20%" }} placeholder={placeholder} onChange={handleChange} value={value} />
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