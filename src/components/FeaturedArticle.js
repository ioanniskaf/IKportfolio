import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue } from "framer-motion"

const FramerImage = motion(Image)

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <li className="col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl relative">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
            <Link
                href={link}
                target="_blank"
                className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration: 0.2}}
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    33vw'
                 />
            </Link>
            <Link
                href={link}
                target="_blank"
            >
                <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary dark:text-primaryDark font-semibold">{time}</span>
        </li>
    )
}

export default FeaturedArticle