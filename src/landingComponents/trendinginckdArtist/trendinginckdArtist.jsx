import React from 'react'
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./trendinginckd.module.css";
export default function TrendinginckdArtist () {
  return (
    <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">
                    <div className="text_box_content_inner max_w_100pc pt_80 pb_65">
                        <div className="d_flex align_item_center justify_space_between">
                            <h3 className="color_gray_550 mb_0">Trending inckd tattoo artists</h3>
                            <button type="button" className="btn_primary btn_img btn_xxl">
                                Explore more artists
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
                    <div className={`${'mt_0 mb_80'} ${styles.listing_pageContainer}`}>
                        <div className={styles.listing_grid_wrapper}>
                            <div className={styles.listing_gridItem}>                        
                                <div className={styles.listing_grid_img_col}>                            
                                    <Image
                                        src="/trend-couple-1.png"                 
                                        alt="Trending inckd tattoo artists"
                                        width={752}
                                        height={776}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                    />
                                </div> 
                                <div className={styles.listing_grid_content_wrap}>
                                    <div className={styles.listing_grid_img_profile}>
                                        <Image
                                            src="/Jamie-Sebastian.png"                 
                                            alt="Trending couple tattoos"
                                            width={97}
                                            height={97}
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL={blurDataURL}
                                            layout="responsive"
                                        />
                                    </div>
                                    <div className={styles.listing_grid_profile_details}>
                                        <h6 className={styles.listing_grid_profile_title}>Jamie Sebastian</h6>
                                        <span className={styles.listing_grid_profile_address}>Zurich, Switzerland</span>
                                    </div>
                                </div>                                    
                            </div>

                            <div className={styles.listing_gridItem}>                        
                                <div className={styles.listing_grid_img_col}>
                                    <Image
                                        src="/trend-couple-2.png"                 
                                        alt="Trending inckd tattoo artists"
                                        width={752}
                                        height={776}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                    />
                                </div>
                                <div className={styles.listing_grid_content_wrap}>
                                    <div className={styles.listing_grid_img_profile}>
                                        <Image
                                            src="/Jamie-Sebastian.png"                 
                                            alt="John Doe"
                                            width={97}
                                            height={97}
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL={blurDataURL}
                                            layout="responsive"
                                        />
                                    </div>
                                    <div className={styles.listing_grid_profile_details}>
                                        <h6 className={styles.listing_grid_profile_title}>John Doe</h6>
                                        <span className={styles.listing_grid_profile_address}>Zurich, Switzerland</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.listing_gridItem}>                        
                                <div className={styles.listing_grid_img_col}>
                                    <Image
                                        src="/trend-couple-3.png"                 
                                        alt="Trending inckd tattoo artists"
                                        width={752}
                                        height={776}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                    />
                                </div>
                                <div className={styles.listing_grid_content_wrap}>
                                    <div className={styles.listing_grid_img_profile}>
                                        <Image
                                            src="/Jamie-Sebastian.png"                 
                                            alt="David smith"
                                            width={97}
                                            height={97}
                                            loading="lazy"
                                            placeholder="blur"
                                            blurDataURL={blurDataURL}
                                            layout="responsive"
                                        />
                                    </div>
                                    <div className={styles.listing_grid_profile_details}>
                                        <h6 className={styles.listing_grid_profile_title}>David smith</h6>
                                        <span className={styles.listing_grid_profile_address}>Zurich, Switzerland</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section>
  )
}
