import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { motion, useMotionValue } from "framer-motion"
import { useRef } from "react"
import Transition from "@/components/Transition"
import FeaturedArticle from "@/components/FeaturedArticle"

import article1 from "../../public/images/articles/ai_take_over.jpg"
import article2 from "../../public/images/articles/ai_take_over.jpg"


const FramerImage = motion(Image)

const MovingImage = ({title, img, link}) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const imgRef = useRef(null)
    
    function handleMouse(e) {
        imgRef.current.style.display = "inline-block"
        x.set(e.pageX)
        y.set(-10)
    }

    function handleMouseLeave(e) {
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }

    return(
        <Link href={link} target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline pointer-arrow">{title}</h2>
            <FramerImage
                style={{x:x, y:y}}
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration: 0.2}}}
                ref={imgRef}
                src={img}
                alt={title}
                className="w-96 z-10 h-auto hidden absolute rounded-lg md:!hidden" />
        </Link>
    )
}


const Article = ({img, title, date, link}) => {
    return(
        <motion.li 
            initial={{y:200}}
            whileInView={{y:0, transition: {duration: 0.5 , ease:"easeInOut"}}}
            viewport={{once:true}}
            className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between
            bg-light dark:bg-dark text-dark dark:text-light first:mt-0 border border-solid border-dark dark:border-light border-r-4 border-b-4
            sm:flex-col
            ">
            <MovingImage 
                title={title}
                img={img}
                link={link}
            />
            <span className="text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>
    )
}

const articles = () => {
  return (
    <>
    <Head>
        <title> Ioannis Kafatos | Artcles Page</title>
        <meta name="Ioannis Kafatos (iokaf.com) Articles Page" content="This is a page where I will put all the interesting articles I find all over the internet." />
    </Head>
    <Transition />
    <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
            <AnimatedText text="Words Can Change The World!" className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
            <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
                <FeaturedArticle 
                    title="Will AI take over the world - Forbes"
                    summary="The relationship between human and machine is a theme that will cut through the advance (or decline)
                    of the world, and we have written about it frequently (i.e. Talos).
                    As my limited vision can perceive, will attempt a classification that says 
                    there are at least two aspects of this megatrend 1. the risks that machines take over our (human) world (AI),
                     and 2. the risks that machine led worlds start to exist outside the human one."
                    time="9 min read"
                    link="https://www.forbes.com/sites/mikeosullivan/2023/03/11/will-ai-take-over-the-world/"
                    img={article1}
                />
                <FeaturedArticle 
                    title="Will AI take over the world - Forbes"
                    summary="The relationship between human and machine is a theme that will cut through the advance (or decline)
                    of the world, and we have written about it frequently (i.e. Talos).
                    As my limited vision can perceive, will attempt a classification that says 
                    there are at least two aspects of this megatrend 1. the risks that machines take over our (human) world (AI),
                     and 2. the risks that machine led worlds start to exist outside the human one."
                    time="9 min read"
                    link="https://www.forbes.com/sites/mikeosullivan/2023/03/11/will-ai-take-over-the-world/"
                    img={article1}
                />
            </ul>
            <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
            <ul>
                <Article 
                    title="Will AI take over the world - Forbes"
                    img={article2}
                    date="March 22, 2023"
                    link="https://www.forbes.com/sites/mikeosullivan/2023/03/11/will-ai-take-over-the-world/"
                />
                <Article 
                    title="Will AI take over the world - Forbes"
                    img={article2}
                    date="March 22, 2023"
                    link="https://www.forbes.com/sites/mikeosullivan/2023/03/11/will-ai-take-over-the-world/"
                />
                <Article 
                    title="Will AI take over the world - Forbes"
                    img={article2}
                    date="March 22, 2023"
                    link="https://www.forbes.com/sites/mikeosullivan/2023/03/11/will-ai-take-over-the-world/"
                />
                <Article 
                    title="Will AI take over the world - Forbes"
                    img={article2}
                    date="March 22, 2023"
                    link="https://www.forbes.com/sites/mikeosullivan/2023/03/11/will-ai-take-over-the-world/"
                />
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles