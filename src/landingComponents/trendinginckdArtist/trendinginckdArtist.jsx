import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./trendinginckd.module.css";
import useWindowResize from "@/hooks/useWindowSize";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
export default function TrendinginckdArtist ({title,title_sub , content ,button}) {
    const { isMobileView } = useWindowResize();
    let sliderSettings = {};

    sliderSettings = {
    infinite: false,
    speed: 300,
    slidesToShow: isMobileView ? 1 : 3,
    slidesToScroll: isMobileView ? 1 : 3,
    dots: true,
    };

    const [images, setImage] = useState([
    { artistImage:"https://storage.googleapis.com/hllincd-bucket/profile/image/1048_484EAC34-6F4B-4438-A8C2-33928DD44B38.jpg",  image: "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4620_20221006100342954-medium.jpg" ,name:"Chris harvey" ,location:"London, United Kingdom"},
    { artistImage:"https://storage.googleapis.com/hllincd-bucket/profile/image/732_2E380F59-A6D7-489A-A63D-8EDBCD930746.jpg",  image: "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/2415_20220913092008354-medium.jpg" ,name:"Southgate SG Tattoo" ,location:"London, United Kingdom"},
    {artistImage:"https://storage.googleapis.com/hllincd-bucket/profile/image/1012_a6338e0d-9888-4ca1-b6dc-06f911cd3361.jpg",   image: "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/4373_20221003072650823-medium.jpg" ,name:"pennygrit" ,location:"Redhill, United Kingdom"},
    {artistImage:"https://storage.googleapis.com/hllincd-bucket/profile/image/3585_inckd/image/20230204141144902_C9621048-27B5-40BB-A611-4A7596955485.jpg",   image: "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/17570_20230204154920550-medium.jpg" ,name:"Nhong Niramit" ,location:"Nottinghamshire, United Kingdom"},
    { artistImage:"https://storage.googleapis.com/hllincd-bucket/profile/image/1711_18448F13-4566-46B1-ABFB-05C708D51B88.jpg",  image: "https://storage.googleapis.com/hllincd-bucket/profile/image_medium/8444_20221108224339907-medium.jpg" ,name:"Hugoink_bristol" ,location:"Weston-super-Mare, United Kingdom"},

    ]);
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
                                        style={{"borderTopRightRadius":"20px","borderTopLeftRadius":"20px"}}
                                        />
                                    </div>
                
                                    <div className={styles.listing_grid_content_wrap}>
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
