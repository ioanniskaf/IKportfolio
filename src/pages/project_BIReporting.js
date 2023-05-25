import Layout from "@/components/Layout"
import Head from "next/head"
import Transition from "@/components/Transition"
import Image from "next/image"
import { motion } from "framer-motion"
import video1 from "../../public/bi_project/media/bi_report_video.mp4"
import img1 from "../../public/bi_project/media/CustomWeight.jpg"
import img2 from "../../public/bi_project/media/GradingSystem.jpg"
import img3 from "../../public/bi_project/media/Model.jpg"
import LinkIcon from "@/components/Icons"
import Link from "next/link"

const FramerImage = motion(Image)

const project_BIReporting = () => {
  return (
	<>
    <Head>
        <title> Ioannis Kafatos | Project Power BI Dashboard</title>
        <meta name="Ioannis Kafatos (iokaf.com) Project 1 Page" content="Power BI Project 1" />
    </Head>
    <Transition />
    <main className="w-full mb-16 flex flex-col items-center justify-center text-dark dark:text-light">
        <Layout className="pt-16">
			<div className="w-[35%]">
				<a href={"/"} target="_blank" className="hover:underline underline-offset-2">
					<h3 className="mb-4 font-bold text-2xl sm:text-xl xs:text-lg">Power BI Dashboard</h3>
				</a>
			</div>
			<video className="w-full" controls src={video1} type='video/mp4' />

			<div className="mt-4 mb-10 w-full">
				<p className="text-justify font-medium w-full md:text-sm">
					Initially exporting data in raw .csv files from specialized  mobile network analysis
					tool using embedded SQL query functionality. Then, using created Excel VBA tool, a main 
					Excel workbook with all required tables is populated in different sheets with data, after cleaning and 
					adjustments were made. This workbook is the data source for the dashboard which was designed 
					to present the results in two main categories, Data and Voice performance. Added functionality of
					setting custom weight parameters in each subcategory in order to adjust to any future requirements or different
					testing enviroment<br/>
					<br/>
					Tools Used :<br/>
					<br/>
				</p>
				<div 
					className="w-full flex flex-row items-center font-medium md:text-sm"
				>
					<span>&#x2022;Microsoft VBA Tools&nbsp;</span>
				</div>
				<Link 
					href="https://powerbi.microsoft.com/en-us/"
					target="_blank"
					className="w-full items-center font-medium md:text-sm"
				>
					<span>&#x2022;Microsoft Power BI&nbsp;</span>
					<LinkIcon className={'inline-block'}/>
				</Link>
				<div></div>
				<Link 
					href="https://www.keysight.com/us/en/product/NTN00000B/nemo-analyze-drive-test-post-processing-solution.html"
					target="_blank"
					className="w-auto inline items-center font-medium md:text-sm"
				>
					<span>&#x2022;Keysight Nemo Analyze&nbsp;</span>
					<LinkIcon className={'inline-block'} />
				</Link>
			</div>
			<motion.div 
	            initial={{y:200}}
            	whileInView={{y:0, transition: {duration: 0.5 , ease:"easeInOut"}}}
            	viewport={{once:true}}
            	className="grid grid-cols-12 gap-6 mb-10"
			>
				<div className="col-span-9 xxl:col-span-12">
					<a href={img1.src}>
						<FramerImage src={img1} alt="CustomWeight"
							whileHover={{scale:1.05}}
							transition={{duration: 0.2}}
						/>
					</a>
				</div>
				<div className="col-span-3 xxl:col-span-12 pl-4 xxl:pl-0">
					<p className="w-full xxl:text-justify font-medium text-left text-md md:text-sm text-dark/60 dark:text-light/60">
						All different places have a unique ID named &quot;CODE&quot; which is the 
						connection between measurement files and places thus giving us the ability
						to aggregate results not only based on this ID but all the information that
						this ID is associated with like Type, City, Subtype etc. There is also the function
						of adjusting, via a correction factor, the weights of each test as per request.
					</p>
				</div>
        	</motion.div>
			<motion.div 
	            initial={{y:200}}
            	whileInView={{y:0, transition: {duration: 0.5 , ease:"easeInOut"}}}
            	viewport={{once:true}}
            	className="grid grid-cols-12 gap-2 mb-10"
			>
				<div className="col-span-3 xxl:col-span-12 pr-4 xxl:pr-0 xxl:order-2">
					<p className="w-full xxl:text-justify font-medium text-left text-md md:text-sm text-dark/60 dark:text-light/60">
						There is a default weight distribution to initially calculate
						the scores or grades, meaning the network performance in various tests.
						After the initial calculation and by using the sliders in the dashboard stakeholders
						are able to manipulate the grading system in order to obtain results based on their opinion
						of the correct weight distribution and identify aspects of interest. 
					</p>
				</div>
				<div className="col-span-9 xxl:col-span-12 xxl:order-1">
					<a href={img2.src}>
						<FramerImage src={img2} alt="GradingSystem"
							whileHover={{scale:1.05}}
							transition={{duration: 0.2}}
						/>
					</a>
				</div>
        	</motion.div>
			<motion.div 
	            initial={{y:200}}
            	whileInView={{y:0, transition: {duration: 0.5 , ease:"easeInOut"}}}
            	viewport={{once:true}}
            	className="grid grid-cols-12 gap-6 mb-10"
			>
				<div className="col-span-9 xxl:col-span-12">
					<a href={img3.src}>
						<FramerImage src={img3} alt="Model"
							whileHover={{scale:1.05}}
							transition={{duration: 0.2}}
						/>
					</a>
				</div>
				<div className="col-span-3 xxl:col-span-12 pl-4 xxl:pl-0">
					<p className="w-full xxl:text-justify font-medium text-left text-md md:text-sm text-dark/60 dark:text-light/60">
						Finally, the Power BI model relationships where the &quot;MeasurementFile&quot; table 
						along with the associated information, acts as the main node of the system. Additionally,
						a number of other &quot;Measurements&quot;, as described in Power BI, have been calculated in order to make
						the dashboard fully functionable.
					</p>
				</div>
        	</motion.div>
        </Layout>
    </main>
	</>
  )
}

export default project_BIReporting