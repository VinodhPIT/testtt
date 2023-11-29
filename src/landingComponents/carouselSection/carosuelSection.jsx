import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./trending.module.css";
import useWindowResize from "@/hooks/useWindowSize";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CarouselSection({title ,content,datas ,buttonName ,isButtonVisible ,keyword}) {

    const { isMobileView } = useWindowResize();
  let sliderSettings = {};

  sliderSettings = {    
    infinite: false,
    speed: 300,
    slidesToShow:isMobileView ? 1.64 :datas.length>5 ?5 :5,
    slidesToScroll: isMobileView ? 1.64 :datas.length>5 ?5 :2 ,  
  };
  
 
  return (
    <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner flex_direction_column">
                {/* <div className="justify_content_start container w_100pc">
                  <div className="text_box_content_inner max_w_100pc pt_80 pb_65 m_pt_pb_50">
                      <div className="d_flex align_item_center justify_space_between m_flex_direction_column">
                        <h2 className="color_gray_550 mb_0 heading_h2 m_mb_25 mr_20 m_mr_0">{title}</h2>
                        <Link href="/explore/tattoos"  className="btn_primary btn_img btn_xxl m_btn_custom_48">
                          Explore more tattoos
                          <Image
                            src="/arow-white-right.svg"
                            width={24}
                            height={24}
                            alt="logo"
                            loading="lazy"
                            placeholder="blur"
                            blurDataURL={blurDataURL}
                            className="ml-8 mt-2"
                           
                          />
                        </Link>
                      </div>
                  </div>
                </div> */}

<div className="d_flex align_item_start text_left justify_space_between m_flex_direction_column container mt_25 mb_25">
                            <div className="d_flex align_item_left justify_space_between flex_direction_column md_max_60 m_max_100">
                                <h2 className="color_gray_550 text_left heading_h2 mb_20 m_mb_25 mr_0">
                                    <span class="m_dis_inline">{title} </span>
                                    {/* <span class="textBlock m_dis_inline">inckd tattoo artists</span> */}
                                </h2>
                                <p class="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0 m_pb_35">{content}</p>
                            </div>
                            
                       {isButtonVisible ===false  ? null:     <Link href={`/explore/tattoos?keyword=${keyword}`}
                                 className="btn_primary btn_img btn_xxl m_btn_custom_48">
                                {buttonName}
                                <Image
                                src="/arow-white-right.svg"
                                width={24}
                                height={24}
                                alt="logo"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={blurDataURL}
                                className="ml-8 mt-2"
                                />
                            </Link>}
                        </div>



                <div className="justify_content_start container w_100pc">                
                    <div className={`${'mt_0 mb_80 m_mb_50'} ${styles.listing_pageContainer}`}>
                      <div className={styles.listing_grid_wrapper}>                          
                            <Slider {...sliderSettings}>
                                {datas.map((imgPath, index) => (
                                    <div className={styles.listing_gridItem} key={index}>
                                    <div className={styles.listing_grid_img_col}>
                                        <Image
                                        src={imgPath.image}
                                        alt="Trending couple tattoos"
                                        width={378}
                                        height={378}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                       className="tets"
                                    
                                       layout="responsive"
                                         style={{"borderRadius":"10px"}}
                                      
                                        />
                                    </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section>
  )
}
