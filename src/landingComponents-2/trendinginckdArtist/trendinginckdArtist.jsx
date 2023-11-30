import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./trendinginckd.module.css";
import useWindowResize from "@/hooks/useWindowSize";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function TrendinginckdArtist ({title ,titleSub , content ,buttonName ,data ,url}) {
    // const { isMobileView } = useWindowResize();
    // let sliderSettings = {};

    // sliderSettings = {
    // infinite: false,
    // speed: 300,
    // slidesToShow: isMobileView ? 1 : 5,
    // slidesToScroll: 1,
    // dots: true,
    // };

 
  return (
    <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">
                    <div className="text_box_content_inner max_w_100pc pt_80 pb_25">
                        <div className="d_flex align_item_start text_left justify_space_between m_flex_direction_column">
                            <div className="d_flex align_item_left justify_space_between flex_direction_column md_max_60 m_max_100">
                                <h2 className="color_gray_550 text_left heading_h2 mb_20 m_mb_25 mr_0">
                                    <span class="m_dis_inline">{title}</span>
                                    <span class="textBlock m_dis_inline">{titleSub}</span>
                                </h2>
                               
                            </div>
                            
                           
                            
                            <Link href={url}
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
                            </Link>
                        </div>


                        <p class="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 m_mt_25 mb_0 m_pb_35">{content}</p>

                        
                    </div>                               
                    <div className={`${'mt_0 mb_80 m_mb_30 m_mt_25 trending_artist_slider'} ${styles.listing_pageContainer}`}>
                        <div className={styles.listing_grid_wrapper}>                        
                                {data.map((el, index) => (
                                    <div className={styles.listing_gridItem} key={index}>
                                        <div className={styles.listing_grid_img_col}>
                                            <Image
                                            src={el.image}
                                            alt="tattoo"
                                            width={752}
                                            height={776}
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL={blurDataURL}
                                            layout="responsive"
                                            style={{"borderTopRightRadius":"11px" ,"borderTopLeftRadius":"11px"}}
                                            />
                                        </div>
                
                                        <div className={styles.listing_grid_content_wrap}>
                                            <div className={styles.listing_grid_img_profile}>
                                                <Image
                                                    src={el.artistImage}
                                                    alt={el.artistName}
                                                    width={97}
                                                    height={97}
                                                    loading="lazy"
                                                    placeholder="blur"
                                                    blurDataURL={blurDataURL}
                                                    layout="responsive"
                                                />
                                            </div>
                                            <div className={styles.listing_grid_profile_details}>
                                                <h6 className={styles.listing_grid_profile_title}>
                                                    {el.artistName}
                                                </h6>
                                                <span className={styles.listing_grid_profile_address}>
                                                   {el.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section>
  )
}
