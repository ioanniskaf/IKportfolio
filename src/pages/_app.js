import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { Montserrat } from "next/font/google"
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
// import { useEffect } from 'react'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
})

export default function App({ Component, pageProps }) {

//   useEffect(() => {
// 	fetch("http://localhost:5000/")
// 	  .catch(err => console.log(err))
// 	}, [])

  const router = useRouter()
  return (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
	  <link rel="canonical" href="http://iokaf.com/" />
    </Head>
    <main className={`${montserrat.variable} bg-light dark:bg-dark font-mont flex flex-col items-center w-full min-h-screen`}>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
      <Footer />
    </main>
  </>
  ) 
}
