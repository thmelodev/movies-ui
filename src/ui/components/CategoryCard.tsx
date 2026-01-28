interface CardInformationProps {
  category: string;
}

const CategoryCard = ({ category }: CardInformationProps) => {
  return (
    <div className="bg-secondary p-2 font-montserrat font-semibold text-[rgba(236, 217, 250, 1)] backdrop-blur-xs">{category.toUpperCase()}</div>
  )
}

export default CategoryCard;