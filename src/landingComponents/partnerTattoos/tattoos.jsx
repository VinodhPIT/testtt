import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from './partnertattoos.module.css'

export default function PartnerTattoos() {
  return (
    <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">
                    <div className="text_box_content_inner m_pr_0 pt_pb_40">
                        <h3 className="color_gray_550 mb_15">Partner Tattoos</h3>
                        <h5 className="color_gray_550 custom_fs_32 fw_400 mb_15">A Symbol of Everlasting Love</h5>
                        <p className="custom_fs_20 custom_fs_m_16 color_gray_550 lh_33 mb_0">Partner tattoos go beyond mere ink on skin; they are a profound expression of commitment and shared experiences. Here&apos;s why couples are choosing partner tattoos to commemorate their love</p>
                    </div>
                    <div className={styles.listing_pageContainer}>
                        <div className={styles.listing_grid_wrapper}>
                            <div className={styles.listing_gridItem}>                        
                                <div className={styles.listing_grid_img_col}>                            
                                    <Image
                                        src="/Symbol-Unity.png"                 
                                        alt="Symbol of Unity"
                                        width={746}
                                        height={776}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                    />
                                </div>
                                <div className={styles.listing_grid_details}>
                                    <h3 className={styles.listing_grid_title}>Symbol of Unity</h3>
                                    <p className={styles.listing_grid_desc}>Partner tattoos serve as a powerful symbol of unity, visually depicting the strength of your bond.</p>
                                </div>                                
                            </div>

                            <div className={styles.listing_gridItem}>                        
                                <div className={styles.listing_grid_img_col}>
                                    <Image
                                        src="/Tailored-Story.png"                 
                                        alt="Tailored to Your Story"
                                        width={746}
                                        height={776}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                    />
                                </div>
                                <div className={styles.listing_grid_details}>
                                    <h3 className={styles.listing_grid_title}>Tailored to Your Story</h3>
                                    <p className={styles.listing_grid_desc}>Work with our talented artists to create a custom design that uniquely tells your love story. </p>
                                </div>                                
                            </div>

                            <div className={styles.listing_gridItem}>                        
                                <div className={styles.listing_grid_img_col}>
                                    <Image
                                        src="/Memories-Etched-Ink.png"                 
                                        alt="Memories Etched in Ink"
                                        width={746}
                                        height={776}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                    />
                                </div>
                                <div className={styles.listing_grid_details}>
                                    <h3 className={styles.listing_grid_title}>Memories Etched in Ink</h3>
                                    <p className={styles.listing_grid_desc}>Your partner tattoo becomes a timeless reminder of the precious moments you&apos;ve shared.</p>
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
