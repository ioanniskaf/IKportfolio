import { motion } from "framer-motion"
import CustomMobileLink from "./CustomMobileLink"
import { TwitterIcon, GithubIcon, LinkedInIcon, PinterestIcon, DribbbleIcon , MoonIcon , SunIcon } from "./Icons"

const NavbarMobileMenu = ({handleClick, mode, setMode }) => {
  return (
    <motion.div
        className="min-w-[70vw] z-30 flex flex-col justify-center items-center
        fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
        animate={{scale:1, opacity:1, transition: {duration:0.3}}}
    >
        <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href ="/" title="Home" className="" toggle={handleClick}/>
            <CustomMobileLink href ="/about" title="About" className="" toggle={handleClick}/>
            <CustomMobileLink href ="/projects" title="Projects" className="" toggle={handleClick}/>
            <CustomMobileLink href ="/articles" title="Articles" className="" toggle={handleClick}/>
        </nav>
        <nav className="flex items-center justify-center flex-wrap mt-4">
            <motion.a href="https://github.com/ioanniskaf" target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale:0.9 }}
                className="w-12 mx-3 sm:mx-1 bg-light rounded-full dark:bg-dark"
            >
                <GithubIcon />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/ioannis-kafatos-75554093/" target={"_blank"}
                            whileHover={{ y: -2 }}
                whileTap={{ scale:0.9 }}
                className="w-12 mx-3 sm:mx-1"
            >
                <LinkedInIcon />
            </motion.a>
            <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-3 sm:mx-1 flex items-center justify-center rounded-full p-1
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
    </motion.div>
  )
}

export default NavbarMobileMenu