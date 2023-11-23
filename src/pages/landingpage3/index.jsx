import React from 'react'
import Image from 'next/image'
import {blurDataURL} from '@/constants/constants'




export default function Landing3() {
  return (
    <div>



    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
      loading="lazy"
      placeholder="blur"
      blurDataURL={blurDataURL}
      fill //position-absolute

      objectFit="cover"
    
objectPosition='bottom'

layout="responsive"



    />

      
    </div>
  )
}
