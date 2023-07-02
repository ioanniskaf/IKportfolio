import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Transition from "@/components/Transition"
import FeaturedProject from "@/components/FeaturedProject"
import Project from "@/components/Project"
import powerBILogo from "../../public/images/projects/powerBILogo.png"
import portfolio from "../../public/images/projects/portfolio.png"
import sumz from "../../public/images/projects/sumz.png"
import under_construction from "../../public/images/projects/under_construction.png"

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
            <AnimatedText text="A sample of my work"
                className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            />
            <div className="grid grid-cols-12 gap-x-6 gap-2 sm:gap-x-0">
				<div className="flex items-center col-span-12">
                    <FeaturedProject
                        title="Power BI Dashboard"
                        img={powerBILogo}
                        summary="A dynamic Power BI Dashboard used for a performance evaluation campaign.
						Data where collected from various areas and the results where presented in an interactive
						way for the stakeholders to gain insights about their network performance."
                        link="/project_BIReporting"
                        github=""
                        type="Featured Project"
                    />
                </div>
                <div className="flex items-center col-span-6 sm:col-span-12">
                    <Project 
                            title="My Personal Website"
                            img={portfolio}
                            link="http://iokaf.com/"
                            github="https://github.com/ioanniskaf/IKportfolio"
                            type="Project"
                        />
                </div>
                <div className="flex items-center col-span-6 sm:col-span-12">
                    <Project 
                            title="AI Article Summarizer"
                            img={sumz}
                            link="http://iokaf.com/ai-summarizer"
                            github="https://github.com/ioanniskaf/ai-summarizer"
                            type="Project"
                        />
                </div>
				<div className="flex items-center col-span-6 sm:col-span-12">
                    <Project 
                            title="Web Scraper and Recommendation System"
                            img={under_construction}
                            link=""
                            github=""
                            type="Project"
                        />
                </div>
                <div className="flex items-center col-span-6 sm:col-span-12">
                    <Project 
                            title="Google Advanced Data Analytics Capstone Project"
                            img={under_construction}
                            link=""
                            github=""
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
