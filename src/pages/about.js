import Head from "next/head"
import Image from "next/image"
import profilePic from "../../public/images/profile/myPic.jpg"
import Layout from "@/components/Layout"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import Transition from "@/components/Transition"
import AnimatedText from "@/components/AnimatedText"
import AnimatedNumbers from "@/components/AnimatedNumbers"

const about = () => {
  return (
    <>
        <Head>
            <title> IoannisKafatos | About Page</title>
            <meta name="Ioannis Kafatos (iokaf.com) About Page" content="This is a sort biography , education and work experience information page." />
        </Head>
        <Transition />
        <main className="flex w-full flex-col item-center justify-center dark:text-light">
            <Layout className="pt-16">
                <AnimatedText className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" text='Passion Fuels Purpose!'/>
                <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                    <div className="col-span-3 xl:col-span-4 md:col-span-8 flex flex-col items-start justify-start md:order-2">
                        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">Biography</h2>
                        <p className="font-medium">
                            Hello, I&apos;m Ioannis, an Electrical Engineer and Computer Scientinst
                            with 5 years of working exprerience in Data Analysis , Data Engineering and Telecommunications
                            and a passion for Coding, Web Development and learning.
                        </p>
                        <p className="font-medium my-4">
                        I believe that through data analysis I can make informed decisions, solve intricate problems, and drive impactful changes. 
                        It allows me to bring order to chaos, find clarity in ambiguity, and unlock the potential for innovation and growth.
                        It&apos;s not just about numbers and spreadsheets, it&apos;s about unraveling the secrets
                        of the world and making a real difference. 
                        </p> 
                        <p className="font-medium">
                            In every project I am working on I bring my commitment to goal achievement and customer-centered thinking.
                            I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>
                    <div className="col-span-3 xl:col-span-4 md:col-span-8 relative h-max rounded-2xl
                        border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1"
                    >
                        <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[102%] rounded-[1rem] bg-dark dark:bg-light" />
                        <Image src={profilePic} alt="Ioannis Kafatos" className="w-full h-auto rounded-2xl"
                            priority
                            sizes='(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw'
                        />
                    </div>
                    <div className="col-span-2 xl:col-span-8 flex flex-col xl:flex-row items-end xl:items-center justify-between md:order-3">
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={12}/>+
                            </span>
                            <h2 className="text-xl font -medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied Customers</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={20}/>+
                            </span>
                            <h2 className="text-xl font -medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
                        </div>
                        <div className="flex flex-col items-end justify-center xl:items-center">
                            <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                                <AnimatedNumbers value={6}/>+
                            </span>
                            <h2 className="text-xl font -medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">year of experience</h2>
                        </div>
                    </div>
                </div>

                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default about