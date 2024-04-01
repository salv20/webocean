import {motion} from 'framer-motion' 
import { fadeIn,item } from '../../animation/Variants'

const data=[
    {
src:'/Blog image.png',
title:'Product Mail is taking on Gmail by betting on privacy',
text:'Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.'
    },
  {
    src:'/Rectangle 64.png',
   title:'Wants You To Sign Out Of Google Workspace Forever',
    text:'Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.'
    },

    {
        src:'/Rectangle 65.png',
    title:'The Best Email Encryption Services for 2023',
    text:'Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.'
        },
]
const News = () => {
  return (
    <section className="bg-primary pb-6">
        <div className="mx-auto container py-10">

            <div className="flex flex-col gap-8">

<div className=" flex justify-between items-center">

<h3
        className=" crm-h1 leading-tight text-xl sm:text-[26px] lg:text-[30px]"
          >Product in the news</h3>
<button className="btn-1 w-fit btnSmall text-sm capitalize font-semibold sm:h-8 text-white">Browse all news</button>
</div>

<motion.article
variants={fadeIn("up",0.5,3)}
whileInView={'animate'}
initial='initial'
className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {
data.map((db,index)=>(

<motion.div
    variants={item('up',0.5)} 
    className="rounded-lg flex flex-col gap-4 bg-[#0e1330] p-4" key={index}>
    <img src={db.src} alt="" />
    <div className="">
        <h3 className="text-[#F6F6F7] text-lg md:text-xl font-bold ">
{db.title}
        </h3>

    </div>
    <p className=" text-secondary text-sm">
        {db.text}
    </p>

<div className="flex flex-col gap-4">
<img src="/line1.png" alt="" />
<div className="flex justify-between">
    <p className="text-secondary">February 8, 2023</p>
    <button className=" text-white flex items-center gap-1">
    Read more
<img src="/right.png" alt="" />
    </button>
</div>
</div>

</motion.div>

))

    }

</motion.article>

            </div>
        </div>
    </section>
  )
}

export default News
