import Image from "next/image"
import Link from "next/link"
import ericsson from "../../public/images/companies/ericsson_tr.png"
import alpha from "../../public/images/companies/alpha.png"
import cosmote from "../../public/images/companies/cosmote.png"
import epic from "../../public/images/companies/epic.png"
import mtn from "../../public/images/companies/mtn.png"
import orange from "../../public/images/companies/orange.png"
import primetel from "../../public/images/companies/primetel.png"
import telekom from "../../public/images/companies/telekom.png"
import one from "../../public/images/companies/one.png"
import nokia from "../../public/images/companies/nokia.png"
import victus from "../../public/images/companies/victus.png"
import melita from "../../public/images/companies/melita.svg"

const Company = ({src, link="", className=""}) => {
  return (
	<Link href={link} target="_blank"
		className="flex items-center justify-center cursor-pointer"
	>

		<Image className={`w-[100px] h-[80px] rounded-md ${className}`} src={src} alt="company"/>
	</Link>
  )
}


const Clients = () => {
  return (
	<>
	<div className="mt-16 grid grid-cols-6 lg:grid-cols-4 gap-3 sm:grid-cols-3 place-items-center">
		<div className="w-full col-span-6 lg:col-span-4 sm:col-span-3 flex flex-col items-start justify-start">
		  <h2 className="mb-4 text-lg font-bold text-dark/75 dark:text-light/75">CLIENTS: </h2>
		</div>
		<Company className="bg-white bg-opacity-85" src={ericsson} link="https://www.ericsson.com/en"/>
		<Company src={telekom} link="https://mobile.telekom.ro/"/>
		<Company src={cosmote} link="https://www.cosmote.gr/hub/"/>
		<Company src={orange} link="https://www.orange.ro/"/>
		<Company className="bg-white" src={nokia} link="https://www.nokia.com/networks/"/>
		<Company src={one} link="https://www.one.al/"/>
		<Company src={victus} link="https://www.victus.gr/"/>
		<Company src={mtn} link="https://www.epic.com.cy/"/>
		<Company src={epic} link="https://www.epic.com.cy/"/>
		<Company src={primetel} link="https://primetel.com.cy/"/>
		<Company src={alpha} link="https://alfameasurements.com"/>
		<Company src={melita} link="https://www.melita.com/"/>
	</div>
	</>
  )
}

export default Clients