interface FooterProps {
  fixed?: boolean;
}

const Footer = ({ fixed }: FooterProps ) => {
  return (
    <div className={`flex justify-center items-center h-[68px] w-screen border-t border-[#F1E6FD30]/80 p-5 z-40 bg-background rounded-none ${fixed ? 'fixed bottom-0 left-0' : ''}`}>
      <span className="font-normal font-montserrat text-wrap text-center">2025 © Todos os direitos reservados a <span className="font-semibold">Cubos Movies</span></span>
    </div>
  )
}

export default Footer;