import { useEffect, useState } from "react"

const Header = () => {
    const [open,setOpen]=useState(false)
useEffect(()=>{
    document.querySelector('ul').addEventListener(('click'),(e)=>{
        if (e.target.classList?.contains('link')) {
          document.querySelectorAll('.link').forEach((li)=>{
         li.classList.remove('activeNav')
        e.target.classList.add('activeNav')
          })  
        }
    })
})

  return (
    <header className="">
<div className="bg-primary py-4 z-50 relative">
<div className="container mx-auto">
    <div className="flex items-center justify-between">
        <div className="">
            <img src="/logo.png" alt="" width={100} />
        </div>
            <nav className="hidden md:flex">
<ul className=" capitalize text-navCol flex gap-x-8">
    <a href="#" className="link block activeNav">home</a>
    <a href="#" className="link block">about</a>
    <a href="#" className="link block">features</a>
    <a href="#" className="link block">pricing</a>
    <a href="#" className="link block">blogs</a>
</ul>
            </nav>
            <button className="btnSmall hidden md:flex">Get a demo</button>

            <div className={`${open?'close':null} md:hidden bar`}
            onClick={()=>setOpen(!open)}
            >
          
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
    </div>
</div>
</div>



{/* SMALL SCREENS */}

<nav className={`${!open?' -translate-y-[60rem] opacity-0':'translate-y-[0px]'} z-20 transition-all duration-700 fixed top-[60px] left-0 md:hidden bg-white w-full h-full`}>
<div className="container mx-auto pt-6">
<ul className="capitalize w-fit font-bold text-primary flex flex-col gap-y-8">
    <a href="#">home</a>
    <a href="#">about</a>
    <a href="#">features</a>
    <a href="#">pricing</a>
    <a href="#">blogs</a>
</ul>

<button className="btnSmall absolute bottom-28 py-4 font-bold">Get a demo</button>
</div>
</nav>
    </header>
  )
}

export default Header
