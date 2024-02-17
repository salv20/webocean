import {motion} from 'framer-motion' 
import { fadeIn,item } from '../../animation/Variants'
import { featureData } from '../../data/resource'

const Feature = () => {
  return (
    <section className="section bg-primary ">
      <div className="container mx-auto">
        <div className=" text-secondary flex flex-col gap-10">
            <motion.div 
            className="gap-6 gap-x-10 flex flex-col md:flex-row justify-between items-center"
            variants={fadeIn('up',0.3)}
            initial="initial"
            whileInView={'animate'}
            >
                <motion.h3
                 className="heading-text lg:w-3/4"
                 variants={item('up',0.5)}
                 >
                Powerful features to help you 
                <br className="hidden xl:block text-secondary"/> manage all your leads
                </motion.h3>
             <motion.p 
              variants={item('up',0.5)}>Apsum dolor sit amet consectetur. Aliquam
              <br className="hidden lg:block"/>
              elementum elementum in ultrices. Dui maecenas             
              ut eros turpis, ultrices metus morbi aliquet vel.
              </motion.p>
            </motion.div>

            <motion.div
            variants={fadeIn("up",0.3,2)}
            whileInView={'animate'}
            initial='initial'
             className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
{
  featureData.icon.map((img,index)=>(
    <motion.div
    variants={item('up',0.5)}
    className="flex flex-col gap-6 bg-[#0e1330] p-6 rounded-[5px]"key={index}>
<div>
  <img src={img} alt="" />
</div>

<div className="flex flex-col gap-3">
<h3 className="font-Lexend text-white text-lg lg:text-xl">{featureData.header[index]}</h3>

<p>{featureData.content[index]}</p>

</div>

    </motion.div>
  ))
}

            </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Feature
