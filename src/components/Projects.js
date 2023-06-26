const Project = ({ text="", className=""}) => {
	return (
		<span className={`capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm ${className}`}>
			&#x2022; {text}
		</span>
	)
}

const Projects = () => {
  return (
	<>

	<div className="mt-16 grid grid-cols-6 lg:grid-cols-4 gap-3 sm:grid-cols-3 place-items-center">
		<div className="w-full col-span-6 lg:col-span-4 sm:col-span-3 flex flex-col items-start justify-start">
	  		<h2 className="mb-4 text-lg font-bold text-dark/75 dark:text-light/75">PROJECTS: </h2>
			<Project text="EMF 2015, Greece"/>
			<Project text="EMF 2016, Greece"/>
			<Project text="EMC Measurements"/>
			<Project text="COSMOTE NR Spectrum Analysis 2021, Greece"/>
			<Project text="COSMOTE Benchmarking 2016-2021, Greece"/>
			<Project text="COSMOTE Marine Routes Optimization 2017-2019, Greece"/>
			<Project text="NOKIA-COSMOTE Swap 2016-18, Greece"/>
			<Project text="Ericsson-COSMOTE Swap 2016-2020, Greece"/>
			<Project text="Ericsson-COSMOTE VoLTE Rollout 2017, Greece"/>
			<Project text="Ericsson-COSMOTE 5G Rollout 2020-2021"/>
			<Project text="Ericsson-Telekom Swap 2017-2019, Romania"/>
			<Project text="Ericsson-Telekom Swap 2019-2021, NMK"/>
			<Project text="MTN Benchmarking 2015-2018, Cyprus"/>
			<Project text="MTN SSV 2017-2018, Cyprus"/>
			<Project text="Primetel Interreference Analysis 2018, Cyprus"/>
			<Project text="Orange Optimization 2016, Romania"/>
			<Project text="Orange 5G Optimization 2021, Romania"/>
			<Project text="One Albania LTE Optimization 2020, Albania"/>
			<Project text="MOBIX 5G Cross-border 2021, Greece"/>
			<Project text="Melita LTE Rollout 2016, Malta"/>
		</div>
	</div>
	</>
  )
}

export default Projects