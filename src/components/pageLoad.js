import React from 'react'
import style from  './loading/loading.module.css'




export default function PageLoad() {
  return (
    <div className={style.loaderBg}>
      <div  style={{"position": "absolute",
    "top": "50%",
    "left": "50%",
    "transform": "translate(-50% ,-50%)"}}>
<div className={style.loader}></div>
<p className={style.loadText}>Loading...</p>
</div>
    </div>

    
  )
}
