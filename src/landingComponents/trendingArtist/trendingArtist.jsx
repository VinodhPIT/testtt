import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./trending.module.css";
import useWindowResize from "@/hooks/useWindowSize";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function TrendingArtist() {
    const { isMobileView } = useWindowResize();
  let sliderSettings = {};

  sliderSettings = {    
    infinite: true,
    speed: 300,
    slidesToShow:isMobileView ? 1.64 : 4.72,
    slidesToScroll: 1,  
  };
  const [images, setImage] = useState([
    { image: "/trend-couple-1.png" },
    { image: "/trend-couple-2.png" },
    { image: "/trend-couple-3.png" },

    { image: "/trend-couple-1.png" },
    { image: "/trend-couple-2.png" },
    { image: "/trend-couple-3.png" },
  ]);

  return (
    <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner flex_direction_column">
                <div className="justify_content_start container w_100pc">
                  <div className="text_box_content_inner max_w_100pc pt_80 pb_65 m_pt_pb_50">
                      <div className="d_flex align_item_center justify_space_between m_flex_direction_column">
                        <h2 className="color_gray_550 mb_0 heading_h2 m_mb_25 mr_20 m_mr_0">Trending couple tattoos</h2>
                        <button type="button" className="btn_primary btn_img btn_xxl m_btn_custom_48">
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
                        </button>
                      </div>
                  </div>
                </div>
                <div className="justify_content_start w_100pc">                
                    <div className={`${'mt_0 mb_80 m_mb_50'} ${styles.listing_pageContainer}`}>
                      <div className={styles.listing_grid_wrapper}>                          
                            <Slider {...sliderSettings}>
                                {images.map((imgPath, index) => (
                                    <div className={styles.listing_gridItem} key={index}>
                                    <div className={styles.listing_grid_img_col}>
                                        <Image
                                        src={imgPath.image}
                                        alt="Trending couple tattoos"
                                        width={752}
                                        height={776}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
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
