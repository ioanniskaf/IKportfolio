import { motion } from "framer-motion"
import CustomLink from "./CustomLink"
import { GithubIcon, LinkedInIcon, MoonIcon , SunIcon } from "./Icons"

const NavbarMenu = ({ mode, setMode}) => {
  return (
    <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
            <CustomLink href ="/" title="Home" className="mr-4"/>
            <CustomLink href ="/about" title="About" className="mx-4"/>
            <CustomLink href ="/projects" title="Projects" className="mx-4"/>
            {/* <CustomLink href ="/articles" title="Articles" className="ml-4"/> */}
        </nav>
        <nav className="flex items-center justify-center flex-wrap">
            <motion.a href="https://github.com/ioanniskaf" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale:0.9 }}
                className="w-12 mx-3"
            >
                <GithubIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/ioanniskafatos/" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale:0.9 }}
                className="w-12 mx-3"
            >
                <LinkedInIcon />
            </motion.a>
            <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light"  : "bg-light text-dark"}
                `}
            >
                {
                    mode === "dark" ?
                    <SunIcon className={"fill-dark"}/>
                    : <MoonIcon className={"fill-dark"}/>
                }
            </button>
        </nav>
    </div>
  )
}

export default NavbarMenu