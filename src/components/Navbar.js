import { useState } from "react"
import Logo from "./Logo"
import useThemeSwitcher from "./hooks/useThemeSwitcher"
import NavbarMobileMenu from "./NavbarMobileMenu"
import NavbarMenu from "./NavbarMenu"

const Navbar = () => {
    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
    <header
        className='w-[85%] xl:w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'
    >
        <button className="flex-col items-center justify-center hidden lg:flex" onClick={handleClick}>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
        </button>
        <NavbarMenu mode={mode} setMode={setMode}/>

        {
        isOpen ?
            <NavbarMobileMenu handleClick={handleClick} mode={mode} setMode={setMode} isOpen={isOpen}/>
        :
            null
        }

        <div className="absolute right-[50%] lg:right-0 lg:relative lg:top-2 lg:flex xl:hidden">
            <Logo />
        </div>

    </header>
  )
}

export default Navbar