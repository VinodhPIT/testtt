import React from 'react'
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from './tattoosexperience.module.css'

export default function TattooExperience() {
  return (
    <section className="img_text_banner_box">

        <div className="text_box_wrap full-block-wrap block_bg_gray_150">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">
                    <div className="text_box_content_inner pt_pb_80 max_w_100pc m_pt_pb_50">
                        <h2 className="color_gray_550 mb_0 heading_h2">Explore inckd for Your Perfect Partner Tattoo Experience</h2>                        
                    </div>                  
                </div>
            </div>  
        </div>

        <div className="col_full">
            <div className="img_text_box_wrapper">
                <div className={"text_box_wrap right block_bg_gray_150 pb_75 m_pb_40"}>                    
                    <div className="img_text_box_inner container">
                        <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 m_pr_0 m_min_h_reset">
                            <div className="text_box_content_inner max_w_100pc">
                                <div className="d_flex flex_direction_column mb_65 mt_10pc m_mt_15 m_mb_45">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">Find the Right Artist</h4>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">Dive into our extensive network of tattoo artists, each skilled in the art of partner tattoos. Browse portfolios, find styles that resonate with you, and discover the perfect match.</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_65 m_mb_45">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">Consultation Made Easy</h4>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33 ">Connect directly with artists through inckd. Share your ideas, discuss design possibilities, and get expert guidance - all within the app.</p>
                                </div>
                            </div>
                        </div>                        

                        <div class="img_box_wrap justify_content_right">
                            <ul class="app_download_img_list justify_content_end mr_10pc mt_0 h_inherit">
                                <li className="no_filter">
                                    <Image
                                        priority
                                        alt="Celebrate Your Love Journey with Unique Partner Tattoos"
                                        src="/find-right-1.png"
                                        width={623}
                                        height={899}                                
                                        blurDataURL={blurDataURL}
                                        className="max_w_100pc max_h_100pc h_inherit"
                                        placeholder="blur"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="img_text_box_inner container m_switcher">
                        <div class="img_box_wrap justify_content_right m_order_2">
                            <ul class="app_download_img_list justify_content_start ml_10pc mt_0 h_inherit m_ml_0">
                                <li className="no_filter">
                                    <Image
                                        priority
                                        alt="Celebrate Your Love Journey with Unique Partner Tattoos"
                                        src="/find-right-2.png"
                                        width={591}
                                        height={899}                                
                                        blurDataURL={blurDataURL}
                                        className="max_w_100pc max_h_100pc "
                                        placeholder="blur"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 m_pr_0 m_min_h_reset m_order_1">
                            <div className="text_box_content_inner max_w_100pc">
                                <div className="d_flex flex_direction_column mb_65 mt_10pc m_mt_15 m_mb_45">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">Simple and Secure Booking</h4>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">Booking your partner tattoo experience is a breeze. Securely schedule your appointment through our user-friendly app, ensuring a convenient and stress-free process.</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_65 m_mb_45">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">Create Timeless Memories</h4>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33 ">Meet your chosen artist and witness the creation of a unique partner tattoo. Cherish the experience and the art that will forever symbolize your love.</p>
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
