import Link from "next/link"
import Layout from "./Layout"

const Footer = () => {
  return (
    <footer className='w-full flex justify-center border-t-2 border-solid border-dark
        font-medium text-lg dark:text-light dark:border-light md:text-base'
    >
        <Layout className='w-full py-6 flex items-center justify-between lg:flex-col lg:py-4'>
            <span className="xs:text-xs">{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-1 xs:text-xs'>
                Build With <span className='text-primary dark:text-primaryDark text-2xl px-1 xs:text-xs'>&#9825;</span>
                by &nbsp; 
                <Link href="https://www.google.com"
                    className="underline underline-offset-2 xs:text-xs"
                    target={"_blank"}
                >
                    Ioannis Kafatos
                </Link>
            </div>
            <Link
                href="mailto:ioanniskafatos@gmail.com"
                target={"_blank"}
                className="underline underline-offset-2 xs:text-xs"
            >Say Hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer