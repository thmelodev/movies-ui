interface CardInformationProps {
  label: string;
  value: string;
}

const InformationCard = ({ label, value }: CardInformationProps) => {
  return (
    <div className="flex flex-col p-4 gap-2 bg-card w-full h-full justify-center items-start md:h-min">
      <span className="text-xs font-montserrat font-bold text-[rgba(181, 178, 188, 1)]">{label.toUpperCase()}</span>
      <span className="text-xs font-montserrat font-semibold rounded text-white">{value}</span>
    </div>
  )
}

export default InformationCard;