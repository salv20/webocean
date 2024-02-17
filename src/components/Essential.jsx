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
        <div className="flex flex-col gap-6">
<div className="items-center text-center">
            <h3 className="heading-text">Essential apps that protect your</h3>

</div>
<div className="grid grid-cols-2 sm:flex mx-auto gap-8">
    {/* <div className="grid grid-cols-2 gap-y-6 mx-auto sm:grid-cols-4"> */}
{
    protect.icons.map((icon,index)=>(
        <div className="
        flex crm-h1 leading-tight text-xl md:text-[24px] lg:text-[32px]
        gap-2 items-center capitalize" key={index}>
<div>
    <img src={icon} alt="" />
</div>
<h3>{protect.app[index]}</h3>
        </div>
    ))
}
    </div>

{/*  */}
<article className="flex flex-col md:flex-row items-center gap-12">
<div className=" flex flex-col gap-6 items-center md:items-start text-center md:text-left">
<h3
className=" crm-h1 leading-tight text-xl md:text-[24px] lg:text-[30px]"
>End-to-end encrypted inbox and messages</h3>

<p className="text-secondary">
Rorem ipsum dolor sit amet consectetur. Proin dignissim tortor mauris viverra sed volutpat mauris. Amet nisi amet commodo adipiscing ut imperdiet nunc.
</p>

<button className="btn-1 w-fit slide-btn capitalize font-semibold sm:h-10 text-secondary">learn more</button>

</div>

<div className="">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, laboriosam quidem. Unde et nesciunt blanditiis amet soluta error deleniti inventore!
</div>
</article>
{/*  */}
        </div>
        </div> 
    </section>
  )
}

export default Essential
