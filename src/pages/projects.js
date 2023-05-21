import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Transition from "@/components/Transition"
import FeaturedProject from "@/components/FeaturedProject"
import Project from "@/components/Project"

import project1 from "../../public/images/projects/cosmote.jpg"
import project2 from "../../public/images/projects/summz.jpg"


const projects = () => {
  return (
    <>
    <Head>
        <title> Ioannis Kafatos | Projects Page</title>
        <meta name="Ioannis Kafatos (iokaf.com) Projects Page" content="This is a place where I showcase my project portfolio and all the relevant information" />
    </Head>
    <Transition />
    <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
            <AnimatedText text="Imagination Trumps Knowledge!"
                className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            />
            <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                <div className="col-span-12">
                    <FeaturedProject 
                        title="COSMOTE National Benchmarking Campaign"
                        img={project1}
                        summary="A walk and drive National Benchmarking campaign that lasted 2 years. 3 operators, 20 Mobile Devices.
                        Used R&S Swissqual and NDQI solution,  MS SQL Server Queries, MS Excel VBA , MS Power BI"
                        link="/"
                        github="/"
                        type="Featured Project"
                    />
                </div>
                <div className="col-span-6 sm:col-span-12">
                    <Project 
                            title="AI Summarizer using Chat-GPT4"
                            img={project2}
                            link="http://iokaf.com/ai-summarizer"
                            github="https://github.com/ioanniskaf/ai-summarizer"
                            type="Project"
                        />
                </div>
                <div className="col-span-6 sm:col-span-12">
                <Project 
                            title="COSMOTE National Benchmarking Campaign"
                            img={project1}
                            link="/"
                            github="/"
                            type="Project"
                        />
                </div>
            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects
