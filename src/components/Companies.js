import Image from "next/image"
import ericsson from "../../public/images/companies/ericsson.jpg"
import alpha from "../../public/images/companies/alpha.png"
import cosmote from "../../public/images/companies/cosmote.png"
import epic from "../../public/images/companies/epic.png"
import mtn from "../../public/images/companies/mtn.png"
import orange from "../../public/images/companies/orange.png"
import primetel from "../../public/images/companies/primetel.png"
import telekom from "../../public/images/companies/telekom.png"

const Company = ({src}) => {
  return (
	<Image className="w-[75px] h-[60px] rounded-md" src={src} alt={src.value}/>
  )
}

const Companies = () => {
  return (
	<>
	<div className="mt-16 grid grid-cols-6 lg:grid-cols-4 gap-3 sm:grid-cols-3 place-items-center">
		<div className="w-full col-span-6 lg:col-span-4 sm:col-span-3 flex flex-col items-start justify-start">
		  <h2 className="mb-4 text-lg font-bold text-dark/75 dark:text-light/75">COMPANIES: </h2>
		</div>
		<Company src={ericsson} />
		<Company src={alpha} />
		<Company src={cosmote} />
		<Company src={epic} />
		<Company src={mtn} />
		<Company src={orange} />
		<Company src={primetel} />
		<Company src={telekom} />
	</div>
	</>
  )
}

export default Companies