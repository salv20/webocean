import {FaTimes} from 'react-icons/fa'
const Products = () => {
  return (
  <article className="flex flex-col gap-6 lg:flex-row">
    <div className="bg-primary border-[2px] border-[#282d45] overflow-hidden rounded-md  px-6 pt-4 text-white flex flex-col gap-6">
<div className="flex flex-col gap-2">
<h3
className="font-bold text-lg md:text-[20px]"
>Product Mail</h3>

<p className="text-secondary">
Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.
</p>
</div>


<div className="bg-[#0e1330] flex flex-col gap-4 w-full sm:w-5/6 mx-auto px-4 pt-2 rounded-t-lg">
  <h3 className=" capitalize font-Lexend text-[#F6F6F7]">new messages</h3>

  <form action="" className="flex flex-col gap-4 new-form">

<div className="relative">
  <label htmlFor="">to</label>
  <p className="flex absolute sm:relative  w-20 sm:w-32 items-center sm:left-2 sm:mb-1 top-8 sm:top-0 text-sm py-0.5 px-1.5 rounded-xl bg-[#282d45]  gap-2">
  Sajib H.
  <span className='text-[12px] cursor-pointer text-[#77829d]'><FaTimes/></span>
  </p>
  <input type="text" placeholder="cc bcc" className=" placeholder:text-right placeholder:uppercase placeholder:text-[#4e5672] placeholder:font-semibold" />
  
</div>
<div className="">
  <label htmlFor="" className="w-20">subject</label>
  <input type="text" placeholder="Dacilisis tellus tinc"  />
</div>
<div className="">
  <label htmlFor="" className="w-20">from</label>
  <input type='email' placeholder="acilisis@email.com " />
</div>
  <label htmlFor="" className='relative top-[7px]'>Gilisis</label>
</form>
</div>
    </div>

{/* PART 2 */}

  <div className="bg-primary border-[2px] border-[#282d45] overflow-hidden rounded-md px-6 pt-4 text-white flex flex-col gap-6"> 
<div className="flex flex-col gap-2">
<h3
className="font-bold text-lg md:text-[20px]"
>Product UI</h3>

<p className="text-secondary">
Gonsectetur eque nec nunc facilisis tellus tincidunt. Malesuada maecenas ac bibendum consectetur.
</p>
</div> 
    <div>
      <img src="Group 60.png" alt="" className='w-full h-40 sm:h-full lg:h-[198px]' />
    </div>
</div>

  </article>
  )
}

export default Products
