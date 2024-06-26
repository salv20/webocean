
import {motion} from 'framer-motion'
import { fadeIn,item } from '../../animation/Variants'
const protect={
    app:[
        'email,',
        'events,',
        'Files,',
        'Documents'
    ],
    icons:[
'/mail.png',
'event.png',
'files.png',
'document.png'
    ]
}


const Essential = () => {
  return (
    <section className="bg-primary section">
     <div className="container mx-auto">
        <motion.div 
        className="flex flex-col gap-6"
        variants={fadeIn('up',0.3,1.2)}
            initial="initial"
            whileInView={'animate'}
        >
<div className="items-center text-center">
            <motion.h3 
            className="heading-text"
            variants={item('up',0.5)}
            >Essential apps that protect your</motion.h3>

</div>
<motion.div
 className="grid grid-cols-2 sm:flex mx-auto gap-2 sm:gap-8"
 variants={item('up',0.5)}
 >
{
    protect.icons.map((icon,index)=>(
        <div className="
        flex crm-h1 leading-tight text-lg md:text-[24px] lg:text-[32px]
        gap-2 items-center capitalize" key={index}>
<div>
    <img src={icon} alt="" className="h-[20px] sm:h-[30px]" />
</div>
<h3>{protect.app[index]}</h3>
        </div>
    ))
}
    </motion.div>

{/*  */}
<motion.article
 variants={item('up',0.5)}
 className="bg-encrypt lg:bg-encryptLG py-10 px-5 md:px-10 flex flex-col lg:flex-row items-center mt-6 gap-12 border-[1px] border-[#282D45] rounded-lg">
<div className=" flex flex-col gap-6 items-center lg:items-start text-center lg:text-left ">
<h3
className=" crm-h1 leading-tight  text-xl md:text-[24px] lg:text-[30px]"
>End-to-end encrypted inbox and messages</h3>

<p className="text-secondary">
Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.
</p>

<button className="btn-1 w-fit slide-btn capitalize font-semibold sm:h-10 text-white">learn more</button>

</div>

<div className=" w-full xl:w-fit ">
    <img src="/Ellipse 10.png" alt="" className='border-[1px] border-[#282D45] rounded-lg md:h-[450px] w-full lg:h-full' />
</div>

</motion.article>

<article>

    <div className="hidden xl:block">
        <img src="Grid.png" alt="" className='w-full' />
    </div>

<div className="flex flex-col gap-6 sm:flex-row xl:hidden">
<div>
<img src="Card1.png" alt="" className=' w-full' />
</div>

<div>
<img src="Card.png" alt="" className=' w-full' />

</div>
</div>

</article>

<motion.div
     className="flex gap-x-10 justify-center"
     initial='initial'
     variants={fadeIn('up',0.3)}
     whileInView='animate'
     >
         <button className="btnSmall font-semibold">Get a started</button>
         <button className="btn-1 slide-btn text-white">Browse all feature</button>
    </motion.div>

        </motion.div>

        </div> 
    </section>
  )
}

export default Essential
