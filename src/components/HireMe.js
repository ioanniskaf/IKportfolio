import { CircularText } from "./Icons"
import Link from "next/link"

const HireMe = () => {
  return (
    <div className="absolute top-[14%] -left-[25%]
    flex items-center justify-center overflow-hidden
    w-full"
    >
        <div className="w-48 h-auto fex items-center justify-center relative">
            <CircularText className={"fill-dark animate-spin-slow dark:fill-light"}/>

            <Link href="mailto:ioanniskafatos@gmail.com"
              className="flex items-center justify-center absolute
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full
                font-semibold hover:bg-light hover:text-dark
                dark:bg-light dark:text-dark dark:border-light
                hover:dark:bg-dark hover:dark:text-light
                md:w-14 md:h-14 md:text-[12px]
                "
            >
              Hire Me
            </Link>
        </div>
    </div>
  )
}

export default HireMe