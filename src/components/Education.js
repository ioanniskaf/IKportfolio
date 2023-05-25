import { motion , useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null)
    
    return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-start justify-between">
        <LiIcon reference={ref}/>
        <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}
        >
            <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
            <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                {time} | {place}
            </span>
            <p className="font-medium w-full md:text-sm">
                {info}
            </p>
        </motion.div>
    </li>
)}

const Education = () => {
    
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center end"],
            // offset: ["start end", "center start"]
        }
    )
  
    return (
    <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
            Education
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

            <motion.div
                style={{scaleY: scrollYProgress}}
                className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                "/>
            <ul className="w-full flex flex-col items-start justify-between ml-2 xs:ml-2">
                <Details 
                    type="Integrated Master of Electrical and Computer Engineering (MEng ECE)"
                    time="2003-2008"
                    place="National Technical University of Athens"
                    info={<>
						Flows &#58;<br/>
						&#x2022;Telecommunication Systems &amp; Computer Networks<br/>
                        &#x2022;Management &amp; Decision Support Systems<br/>
                        &#x2022;Electric Power Systems<br/>
						&#x2022;High Voltages &amp; Industry Applications<br/>
						</>}
                />
                <Details 
                    type="General Education"
                    time="2000-2003"
                    place="1st General Lyceum Rethymno Crete"
                    info="Graduate with Highest Honors."
                />
            </ul>
        </div>
    </div>
  )
}

export default Education