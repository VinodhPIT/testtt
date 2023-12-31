import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./trendinginckd.module.css";
import useWindowResize from "@/hooks/useWindowSize";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function TrendinginckdArtist ({title,title_sub , content ,button   ,trendingArtist}) {
    const { isMobileView } = useWindowResize();
    let sliderSettings = {};

    sliderSettings = {
        infinite: true,
        speed: 300,
        slidesToShow: isMobileView ? 1.2 : 4,
        slidesToScroll: isMobileView ? 1. : 4,
        dots: true,
     
        responsive: [
            {
                breakpoint: 1290,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: true,
                },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
                dots: true,
              },
            },
      
            {
              breakpoint: 900,
              settings: {
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 3,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
      
            {
              breakpoint: 400,
              settings: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
          ],      
     
        };


  return (
    <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">
                    <div className="text_box_content_inner max_w_100pc pt_80 pb_65 m_pt_pb_50">
                    <div className="d_flex align_item_start text_left justify_space_between m_flex_direction_column">
                            <div className="d_flex align_item_left justify_space_between flex_direction_column md_max_60 m_max_100">
                                <h2 className="color_gray_550 text_left heading_h2 mb_20 m_mb_25 mr_0">
                                    <span class="m_dis_inline">{title} </span>
                                    <span class="textBlock m_dis_inline">{title_sub}</span>
                                </h2>
                                <p class="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0 m_pb_35">{content}</p>
                            </div>
                            
                            <Link href="/explore/tattoo-artists"
                                 className="btn_primary btn_img btn_xxl m_btn_custom_48">
                              {button}
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
                    <div className={`${'mt_0 mb_80 m_mb_30 trending_artist_slider'} ${styles.listing_pageContainer}`}>
                        <div className={styles.listing_grid_wrapper}>
                            <Slider {...sliderSettings} className="custom_content_slick_slider">
                                {trendingArtist.map((imgPath, index) => (
                                    <div className={`${'listing_gridItem'} ${styles.listing_gridItem}`} key={index}>
                                    <div className={`${'listing_grid_img_col'} ${styles.listing_grid_img_col}`}>
                                        <Image
                                        src={imgPath.image}
                                        alt="Trending couple tattoos"
                                        width={752}
                                        height={776}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                        style={{"borderTopRightRadius":"20px","borderTopLeftRadius":"20px"}}
                                        className="imggg"
                                        />
                                    </div>
                
                                    <div className={`${'listing_grid_content_wrap'} ${styles.listing_grid_content_wrap}`}>
                                        <div className={styles.listing_grid_img_profile}>
                                        <Image
                                            src={imgPath.artistImage}
                                            alt={imgPath.name}
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
                                           {imgPath.name}
                                        </h6>
                                        <span className={styles.listing_grid_profile_address}>
                                            {imgPath.location}
                                        </span>
                                        </div>
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
