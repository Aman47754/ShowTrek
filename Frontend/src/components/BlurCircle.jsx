import React from 'react'

function BlurCircle({top="auto",bottom="auto",right="auto",left="auto"}) {
  return (
    <div className='absolute -z-50 h-58 w-58 aspect-square rounded-full bg-amber-500/30 blur-3xl'
    style={{top:top ,bottom:bottom,right:right,left:left}}>

    </div>
  )
}

export default BlurCircle