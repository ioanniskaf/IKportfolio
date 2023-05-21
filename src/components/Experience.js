import { motion , useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ position, company, companyLink, time , address, work }) => {
    const ref = useRef(null)
    
    return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%]
     mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{position}&nbsp;
                <a href={companyLink} target={"_blank"} className="text-primary dark:text-primaryDark capitalize">
                    @{company}
                </a>
            </h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {address}
            </span>
            <p className="font-medium w-full md:text-sm">
                {work}
            </p>
        </motion.div>
    </li>
)}

const Experience = () => {
    
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  
    return (
    <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
            Experience
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

            <motion.div
                style={{scaleY: scrollYProgress}}
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                "/>
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                <Details 
                    position="RNO Department Team Leader"
                    company="Fasmetrics SA"
                    companyLink="https://www.fasmetrics.com/index.php/en/"
                    time="2017-2022"
                    address="Athens, Greece"
                    work="Lead a team of Telecommunication Engineers (RNO) and Drive Test Teams in performing tasks related with the mobile network analysis for several project in
                    the general South Eastern Europe region and for a variaty of well-known companies."
                />
                <Details 
                    position="Telecommunications Engineer"
                    company="Fasmetrics SA"
                    companyLink="https://www.fasmetrics.com/index.php/en/"
                    time="2016-2017"
                    address="Athens, Greece"
                    work="Worked on a team responsible analyzing captured mobile network data, performing incident analysis, designing and creating
                    reports in accordance with customer needs.
                    
                    
                    ."
                />
                <Details 
                    position="RF Mobile Drive Test Engineer"
                    company="Fasmetrics SA"
                    companyLink="https://www.fasmetrics.com/index.php/en/"
                    time="2015-2016"
                    address="Athens, Greece"
                    work="Worked as a Drive Test RF engineer, on the field, configuring data capturing devices and tools 
                    designing routes and collecting mobile network data. Additionally, perfomed initial raw data cleaning, screening and refining."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience