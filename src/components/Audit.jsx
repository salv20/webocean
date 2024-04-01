import Products from "./Products"

const Audit = () => {
  return (
    <section className="bg-primary py-5">
        <div className="container mx-auto ">
            <div className="bg-audit sm:bg-auditLG py-10 px-5 md:px-10 flex flex-col gap-6">
 

 <div className=" flex flex-col gap-12 sm:flex-row items-center justify-between">
 <article className='flex flex-col gap-8' >
    <div className="flex flex-col gap-4 text-center sm:text-left">
    <h3
className="crm-h1 leading-tight  text-xl md:text-[24px] lg:text-[30px]"
>Transparent, audited, <br className="hidden md:block"/> &open source</h3>
<p className=" text-secondary">Torem ipsum dolor sit amet consectetur. Nulla quisque scelerisque  <br className="hidden xl:block"/> eget quis. Eu amet amet eu interdum.</p>

    </div>
<div className="w-full text-center sm:text-left">
<button className="btn-1 slide-btn text-white text-center">Browse all feature</button>

</div>
</article>

<div className="">
    <img src="line.png" alt="" className="w-full" />
</div>

 </div>


<Products/>
            </div>
        </div>
    </section>
  )
}

export default Audit
