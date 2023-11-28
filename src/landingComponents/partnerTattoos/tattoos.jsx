import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from './partnertattoos.module.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowResize from "@/hooks/useWindowSize";






export default function PartnerTattoos({mainTitle ,button,content1 ,content2 ,data , partnerTattoo1 ,slide1  ,tattooStyles }) {

    const { isMobileView } = useWindowResize();
    let sliderSettings = {};

    sliderSettings = {
    infinite: false,
    speed: 300,
    slidesToShow: isMobileView ? 1 : 3,
    slidesToScroll: isMobileView ? 1 : 3,
    dots: true,
    };



  return (
    slide1 ? (
    <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">


                <div className="justify_content_start  w_100pc">
                  <div className="text_box_content_inner max_w_100pc pt_80 pb_65 m_pt_pb_50">
                      <div className="d_flex align_item_center justify_space_between m_flex_direction_column">
                        <h2 className="color_gray_550 mb_0 heading_h2 m_mb_25 mr_20 m_mr_0">{mainTitle}</h2>





                        <Link href="/explore/tattoo-artists?location=London"  className="btn_primary btn_img btn_xxl m_btn_custom_48">
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
                </div>


                    {/* <div className="text_box_content_inner m_pr_0 pt_pb_40">
                        <h3 className="color_gray_550 mb_15 custom_fs_m_45 custom_fs_m_40">{mainTitle}</h3>
                        <h5 className="color_gray_550 custom_fs_32 fw_400 mb_15 custom_fs_m_27">{content1}</h5>
                        <p className="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0">{content2}</p>
                    </div> */}



                    <div className={styles.listing_pageContainer}>
                        <div className={styles.listing_grid_wrapper}>

                  <Slider {...sliderSettings}>
                                {data.map((el, index) => (
                                   <div className={styles.listing_gridItem}  key={el.id}>                        
                                   <div className={styles.listing_grid_img_col}>                            
                                       <Image
                                           src={'/Symbol-Unity.png'}                 
                                           alt={'tattoo'}
                                           width={746}
                                           height={776}
                                           loading="lazy"
                                           placeholder="blur"
                                           blurDataURL={blurDataURL}
                                           layout="responsive"
                                           style={{"borderRadius":"14px"}}
                                       />
                                   </div>
                                   <div className={styles.listing_grid_details}>
                                      {el.tattooName&& <h4 className={styles.listing_grid_title}>{el.tattooName}</h4>}
                                       <p className={styles.listing_grid_desc}>{el.description}</p>
                                   </div>                                
                               </div>
   
                                ))}
                            </Slider>

                            



                        


                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section> )


: (
   
    <section className="img_text_banner_box">
    <div className="text_box_wrap full-block-wrap">
        <div className="img_text_box_inner">
            <div className="justify_content_start container w_100pc">
                <div className="text_box_content_inner m_pr_0 pt_pb_40">
                    <h3 className="color_gray_550 mb_15 custom_fs_m_45 custom_fs_m_40">{mainTitle}</h3>
                    <h5 className="color_gray_550 custom_fs_32 fw_400 mb_15 custom_fs_m_27">{content1}</h5>
                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0">{content2}</p>
                </div>
                <div className={styles.listing_pageContainer}>
                    <div className={styles.listing_grid_wrapper}>

              <Slider {...sliderSettings}>
                            {tattooStyles.map((el, index) => (
                               <div className={styles.listing_gridItem}  key={el.id}>                        
                               <div className={styles.listing_grid_img_col}>                            
                                   <Image
                                       src={partnerTattoo1}                 
                                       alt={'tattooTitle1'}
                                       width={746}
                                       height={776}
                                       loading="lazy"
                                       placeholder="blur"
                                       blurDataURL={blurDataURL}
                                       layout="responsive"
                                   />
                               </div>
                               <div className={styles.listing_grid_details}>
                                   <h4 className={styles.listing_grid_title}>{el.tattooName}</h4>
                                   <p className={styles.listing_grid_desc}>{el.description}</p>
                               </div>                                
                           </div>

                            ))}
                        </Slider>

                        



                    


                    </div>
                </div>
            </div>
        </div>  
    </div>
</section> )
  





  )
}
