import {motion} from 'framer-motion'
import { fadeIn } from '../../animation/Variants'
const Hero = () => {



  return (
    <section className="py-10 hero-container text-white relative bg-primary">
  
      <div className="absolute box-1 sm:-left-[10rem] xl:-left-[15rem] hidden md:block top-[1rem]"></div>
      <div className="absolute box-2 right-0 "></div>

        <div className="container mx-auto hero">
            <div className=" flex flex-col gap-y-6 items-center text-center">
       <motion.h1
        className="crm-h1 leading-tight text-[35px] lg:text-[40px] xl:text-[45px]"
       initial='initial'
       variants={fadeIn('up',0.1)}
       whileInView='animate'
       ><span className='text-[36px] lg:text-[36px] xl:text-[46px]'>A CRM</span> dashboard for engineering teams</motion.h1>
    <motion.p
     className="text-secondary"
     initial='initial'
     variants={fadeIn('up',0.2)}
     whileInView='animate'
     >
    Rorem ipsum dolor sit amet consectetur. Gravida convallis orci ultrices non. Ultricies tempor 
    <br className='hidden lg:block'/>
    at ut cursus mi. Aliquam sed amet vitae orci ac penatibus consectetur.
  </motion.p>
    <motion.div
     className="flex gap-x-10"
     initial='initial'
     variants={fadeIn('up',0.3)}
     whileInView='animate'
     >
         <button className="btnSmall font-semibold">Get a demo</button>
         <button className="btn-1 slide-btn">View pricing</button>
    </motion.div>
        <motion.div
          initial='initial'
          variants={fadeIn('up',0.2)}
          whileInView='animate'
        >
          <img width={600} src="/Hero image.png" alt="" />
        </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero
