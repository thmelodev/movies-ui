import { useEffect } from "react";
import LogoDesktop2 from "../../assets/logo_desktop.svg?react";
import LogoMobile2 from "../../assets/logo_mobile.svg?react";
import Sun from "../../assets/sun.svg?react";
import Moon from "../../assets/moon.svg?react";
import { useThemeStore } from "../../stores/theme.store";

const Header = () => {
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => { }, [theme])

  return (
    <header className="w-screen bg-background/50 border-b border-[#F1E6FD30]/80 backdrop-blur-xs flex justify-center items-center fixed top-0 left-0 z-50">
      <div className="max-w-[1366px] w-full justify-between overflow-hidden flex items-center p-4">
        <LogoDesktop2 className="text-foreground hidden md:inline" />
        <LogoMobile2 className="text-foreground md:hidden" />

        <div className="flex gap-2">
          <button className="btn-secondary" onClick={() => toggleTheme()}>
            {theme === 'dark' ? <Sun className="text-foreground" /> : <Moon className="text-foreground" />}
          </button>
          <button onClick={() => {}}>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header;