export const constainer=(direction,duration)=>{
    return{
        initial:{
            opacity:0,
            y:direction==='up'?80:direction==='down'?-80:0,
            x:direction==='left'?80:direction==='right'?-80:0
   
        },
        animate:{
            opacity:1,
            y:0,
            x:0,
            transition:{
                type:'tween',
                delay:0.2,
                staggerChildren:1,
                duration:duration
            }
        }
  }
}

export const item=(direction,duration)=>{
    return{
        initial:{
            opacity:0,
            y:direction==='up'?30:direction==='down'?-30:0,
            x:direction==='left'?30:direction==='right'?-30:0
        },
        animate:{
            opacity:1,
            y:0,
            x:0,
            transition:{
                type:'tween',
                duration:duration
            }
        }
    }
}