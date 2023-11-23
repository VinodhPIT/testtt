import React from 'react'
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";

export default function UniquePartner() {
  return (    
    <section className="img_text_banner_box">
        <div className="col_full">
            <div className="img_text_box_wrapper">
                <div className={"text_box_wrap right block_bg_gray_150 pt_75 pb_75 m_pt_15 m_pb_35"}>
                    <div className="img_text_box_inner container">
                        <div className="text_box_content justify_content_start pr_40 pl_0 pb_0 m_min_h_reset m_pb_35">
                        <div className="text_box_content_inner">
                            <h2 className="color_gray_550">Celebrate Your Love Journey with Unique Partner Tattoos</h2>
                            <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 ">Celebrate Your Love Journey with Unique Partner Tattoos Are you and your partner searching for a distinctive way to express your love? Look no further! inckd is your gateway to connecting with skilled tattoo artists specializing in crafting unforgettable partner tattoos.</p>                       
                        </div>
                        </div>
                        <div className="img_box_wrap justify_content_right">                  
                        <Image
                            priority
                            alt="Celebrate Your Love Journey with Unique Partner Tattoos"
                            src="/celebrate.png"
                            fill
                            objectFit="contain"
                            objectPosition="right"
                            blurDataURL={blurDataURL}
                            className="m_object_position_center"
                            placeholder="blur"
                        />
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
  )
}
