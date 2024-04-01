import { FaCircle } from "react-icons/fa"
const options={
    pages:[
        'Home',
        'about',
        'contact',
        'blog',
        'blog post',
        'pricing',
        'pricing single'
    ],
    features:[
        'careers',
        'careers single',
        'request a demo',
        'login',
        'sign up'
    ],
    utility:[
        'style guide',
        'password protected',
        '404 not found' ,
        'linceses',
        'changelog'
    ],
    socials:[
        '/social link.png',
        '/social link-1.png',
        'social link-2.png',
        '/social link-3.png',
    ]
}
const Overview = () => {
  return (
  <section className="overview border-t-4 border-primary">
    <div className="container mx-auto py-10">

<div className=" flex flex-col gap-8">

<article className="grid gap-8 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 sm:justify-between items-center">
{/* part1 */}
<div className="flex flex-col gap-6">
<div className="flex items-center ">
            <img src="/logo.png" alt="" width={100} />
            <p className="mt-3 text-[6px] text-[#7214ff]"><FaCircle/></p>
        </div>

<div className="bg-[#0e1330] px-4 py-8 sm:p-8 flex flex-col gap-4 border-[0.5px] rounded-md border-[#282D45]">
    <h3 className="text-[#F6F6F7] text-lg md:text-xl font-bold "> Subscribe to our newsletter</h3>
    <form action="" className="flex flex-col gap-4 w-11/12 mx-auto sm:w-full">
        <input type="email" name="0" id="" 
        placeholder="Enter your email"
        className="outline-none text-white bg-transparent border-2 rounded-3xl indent-4 border-secondary py-2 placeholder:text-secondary placeholder:text-sm"
        />
      <button className="btn-1 btnSmall capitalize font-semibold sm:h-8 text-white">Subscribe</button>

    </form>
</div>

</div>


{/* part 2 */}

<div className="sm:mx-auto capitalize flex text-secondary flex-col gap-4">
    <h3 className="font-semibold">pages</h3>

    <div className="flex flex-col gap-2">
 {
        options.pages.map((pg,index)=>(
<div className="w-fit text-secondary" key={index}>
    <button className="capitalize">{pg}</button>
</div>
        ))
    }
 </div>
</div>

{/* 3rd*/}

<div className="flex flex-col gap-2 sm:mx-auto">
 {
        options.features.map((ft,index)=>(
<div className="w-fit text-secondary" key={index}>
    <button className="capitalize">{ft}</button>
</div>
        ))
    }
 </div>

{/* 4th */}


<div className="sm:mx-auto flex flex-col gap-4 capitalize text-secondary">
    <h3 className="font-semibold">utility pages</h3>

    <div className="flex flex-col gap-2">
    {
        options.utility.map((uti,index)=>(
<div className="w-fit text-secondary" key={index}>
    <button className="capitalize">{uti}</button>
</div>
        ))
    }
 </div>
</div>

</article>

<img src="/Line 36.png" alt="" />
<div className="text-white flex gap-5 flex-col sm:flex-row justify-between">
<p className=" text-sm text-secondary">
Copyright © Product | Designed by <span className="text-white">Webocean LTD</span> - Powered by <span className="text-white">Webflow</span>
</p>
<div className=" flex gap-3  ">
    {
        options.socials.map((soc,index)=>(
                <button key={index}>
               <img src={soc} alt="" className="h-6 hover:border-2 border-primary transition-all duration-150" />
                </button>
        ))
    }
</div>
</div>



</div>
    </div>
  </section>
  )
}

export default Overview
