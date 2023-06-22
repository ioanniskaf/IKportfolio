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
                    position="RF Optimization Engineer"
                    company="Fasmetrics SA"
                    companyLink="https://www.fasmetrics.com/index.php/en/"
                    time="2017-2022"
                    address="Athens, Greece"
                    work="Involved in numerous projects and worked with leading Operators, Vendors and Service providers 
					in general Eastern Europe area, lead technical teams in data analysis and network optimization activities, 
					delivered technical consultancy and build solid expertise in all aspects of performance management process."
                />
                <Details 
                    position="Junior RF Optimization Engineer"
                    company="Fasmetrics SA"
                    companyLink="https://www.fasmetrics.com/index.php/en/"
                    time="2016-2017"
                    address="Athens, Greece"
                    work="Acquired proficient knowledge of mobile communications and principles of GSM/UMTS/LTE/5G technologies, 
					signaling flow and protocols, electromagnetic theory, radio transmission and antenna systems."
                />
                <Details 
                    position="RF Field Test Engineer"
                    company="Fasmetrics SA"
                    companyLink="https://www.fasmetrics.com/index.php/en/"
                    time="2015-2016"
                    address="Athens, Greece"
                    work="Gained valuable work experience on the field, 
					acquainted with key concepts of telecommunications, 
					RF principles and wireless applications."
                />
            </ul>
        </div>
    </div>
  )
}

export default Experience