export interface SelectProps {
  id: string;
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  options?: { value: string; label: string }[];
  value?: string;
  finalIcon?: React.ReactNode;
}

export const Select = ({ id, label, placeholder, onChange, options, value, finalIcon }: SelectProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-2.5 w-full relative">
      {label && <label htmlFor={id} className="font-bold text-[12.8px]">{label}</label>}
      <div className="w-full relative">
        <select
          id={id}
          className="w-full min-h-11 appearance-none"
          style={{ textIndent: 0, paddingRight: "20%" }}
          onChange={(e) => onChange?.(e.target.value)}
          value={value}
        >
          {placeholder && <option value="" disabled selected>{placeholder}</option>}
          {options?.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        {finalIcon && <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">{finalIcon}</div>}
      </div>
    </div>
  )
}