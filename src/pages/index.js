import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from "../../public/images/profile/index_pic.png"
import { LinkArrow , MailIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import Transition from '@/components/Transition'


export default function Home() {
  return (
    <>
      <Head>
      	<title>IoannisKafatos | Personal Portfolio Website</title>
      	<meta name="Ioannis Kafatos (iokaf.com) Hero Page" content="This is the main index page for my personal portfolio website." />
      </Head>
      <Transition />
      <main className='flex justify-center text-dark dark:text-light w-full min-h-screen'>
        <Layout className='pt-16 md:pt-16 sm:pt-8'>
          <div className='flex lg:flex-col items-center justify-between w-full'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="IoannisKafatos" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes='(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                      50vw'
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text='"We can have data without information, but we cannot have information without data"'
                className='text-left lg:!text-center !text-6xl xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As an Electrical Engineer and Computer Scientist I have always been fancinated by Data Analysis because it provides me with a profound sense of discovery and empowerment.
                There&apos;s a thrilling adventure in exploring raw data, uncovering hidden patterns, and extracting meaningful insights.
                The ability to transform complex, seemingly unrelated information into a coherent story is nothing short of magical. 
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='/engCV_ioanniskafatos.pdf' target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                    hover:bg-light hover:text-dark
                    border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                    hover:dark:border-light md:p-2 md:px-4 md:text-base'
                    download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'}/>
                </Link>
                <Link href="mailto:ioanniskafatos@gmail.com" target={"_blank"}
                  className='flex items-center mx-2 bg-dark text-light p-2.5 px-6 rounded-lg text-lg
                    font-semibold hover:bg-light hover:text-dark
                    border-2 border-solid border-transparent hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                    hover:dark:border-light md:p-2 md:px-4 md:text-base'
                  download={true}
                >
                  Contact <MailIcon className={'w-6 ml-1 mt-1 h-[1.1rem]'}/>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
