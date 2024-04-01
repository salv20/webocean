import {motion} from 'framer-motion'
import { fadeIn } from '../../animation/Variants'

const Testimony = () => {
  return (
  <section className="bg-primary pt-14 pb-5 testimony">
    <div className="container mx-auto">
    <div className=" flex flex-col gap-8">
      

      <div className="text-center flex flex-col gap-4">
      <motion.h3
       initial='initial'
       variants={fadeIn('up',0.1)}
       whileInView='animate'
        className=" crm-h1 leading-tight text-xl md:text-[24px] lg:text-[30px]"
          >What our clients say</motion.h3>

      <motion.p 
      className="text-secondary"
      initial='initial'
      variants={fadeIn('up',0.1)}
      whileInView='animate'
      >
        Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae lobortis orci tincidunt facilisis.
        <br className=" hidden lg:block"/>
        Pulvinar lacus ultricies turpis urna sapien.
       </motion.p>
      </div>

    <motion.article
     initial='initial'
     variants={fadeIn('up',0.1)}
     whileInView='animate'
    className=" grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
{/* 1 */}

<aside className='box-design relative'>


     <div className="p-2 flex flex-col gap-4 bg-[#0e1330] mx-2 pb-4 rounded-t-md shadow-lg border-2 border-[#0e1330]">

        <div className="flex items-center gap-2">
        <img src="Avatar.png" alt="" />
    <div>
        <h3 className="text-white">Cameron Williamson</h3>
        <p className=" text-secondary text-sm">Web Designer</p>
    </div>
    <img src="quote.png" alt="" className="h-7 absolute right-4" />
</div>
<p className="text-[#F6F6F7]">
Rorem ipsum dolor sit amet consectetur. Ac quam sem mi nibh volutpat enim pellentesque. Proin iaculis nisl et neque sed fermentum sollicitudin lectus. 
</p>
    </div>
    <div className="box-1 absolute h-14 w-full"></div>


</aside>

{/* 2 */}

<aside className='box-design relative'>

     <div className="p-2 flex relative z-50 pb-2 lg:pb-[30px] flex-col gap-4 bg-[#0e1330] mx-2 rounded-t-md shadow-lg border-2 border-[#0e1330]">

        <div className="flex items-center gap-2">
        <img src="Avatar-1.png" alt="" />
    <div>
        <h3 className="text-white">Esther Howard</h3>
        <p className=" text-secondary text-sm">Web Developer</p>
    </div>
    <img src="quote.png" alt="" className="h-7 absolute right-4" />
</div>
<p className="text-[#F6F6F7]">
At viverra enim enim sed turpis orci cursus. Imperdiet eros mauris sed sodales nisi interdum ac. Eu congue quis egestas donec lectus
</p>
    </div>
    <div className="box-2 absolute z-30 h-14 w-full bg-[#0e1330]"></div>

</aside>

{/* 3 */}

<aside className='box-design relative'>


     <div className="p-2 relative z-50 pb-2 lg:pb-[30px] flex flex-col gap-4 bg-[#0e1330] mx-2 mb-2 rounded-t-md shadow-lg border-2 border-[#0e1330]">

        <div className="flex items-center gap-2">
        <img src="Avatar-2.png" alt="" />
    <div>
        <h3 className="text-white">Jenny</h3>
        <p className=" text-secondary text-sm">Web Designer</p>
    </div>
    <img src="quote.png" alt="" className="h-7 absolute right-4" />
</div>
<p className="text-[#F6F6F7]">
Sed ut diam amet accumsan in. Elementum lorem aliquam venenatis amet sit posuere sed sit. Aliquet suspendisse vitae placerat donec.
</p>
    </div>
    <div className="box-3 absolute z-30 h-14 w-full"></div>

</aside>

{/*  */}
    </motion.article>
<div className=" flex items-center justify-center w-full gap-2">
<button className=" hover:-translate-x-1 transition-all duration-200">
<img src="/arrow-right.png" alt="" />
</button>
<button className=" hover:translate-x-1 transition-all duration-200">
<img src="/Right Arrow.png" alt="" />
</button>
</div>

    </div>

    </div>
  </section>
  )
}

export default Testimony
