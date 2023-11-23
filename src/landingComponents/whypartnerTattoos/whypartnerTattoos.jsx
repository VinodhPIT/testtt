import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/constants/constants";
import styles from './whypartnertattoos.module.css'

export default function WhypartnerTattoos() {
  return (
    <section className="img_text_banner_box">

        <div className="text_box_wrap full-block-wrap block_bg_yellow">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc">
                    <div className="text_box_content_inner pt_pb_80 max_w_100pc m_pt_pb_50">
                        <h3 className="color_gray_550 mb_0 heading_h2">Why inckd for partner tattoos?</h3>                        
                    </div>                  
                </div>
            </div>  
        </div>

        <div className="col_full">
            <div className="img_text_box_wrapper">
                <div className={"text_box_wrap right block_bg_yellow pb_75 m_pb_0"}>                    
                    <div className="img_text_box_inner container">
                        <div className="text_box_content justify_content_start align_item_normal p_0 pr_40 text_left m_pr_0">
                            <div className="text_box_content_inner max_w_100pc">
                                <div className="d_flex flex_direction_column mb_65 mt_10pc m_mt_0 m_mb_35">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">Verified Artists</h4>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33">We curate a selection of top-tier artists, ensuring a standard of excellence in both skill and professionalism.</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_65 m_mb_35">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">User-Friendly Interface</h4>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33 ">Navigate inckd effortlessly. Our app is designed with you in mind, providing a seamless experience from exploration to booking.</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_65 m_mb_35">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24">Secure Transactions</h4>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mb_0 mt-15 lh_33 ">Rest easy knowing that your payments are secure. inckd employs encryption technology for safe and worry-free transactions.</p>
                                </div>
                            </div>
                        </div>                        

                        <div class="img_box_wrap justify_content_right d_flex flex_direction_column min_h_reset ready_embrace_download">
                            <ul class="app_download_img_list justify_content_center mr_0 mt_0 h_inherit">
                                <li className="no_filter">
                                    <Image
                                        priority
                                        alt="Why inckd for partner tattoos?"
                                        src="/whypartner-1.png"
                                        width={323}
                                        height={675}                                
                                        blurDataURL={blurDataURL}
                                        className="max_w_100pc max_h_100pc h_inherit"
                                        placeholder="blur"
                                    />
                                </li>

                                
                            </ul>
                            <ul class="download_app mt_0 max_w_100pc d_flex flex_flow_wrap justify_content_center ready_embrace_block">
                                <li class="download_app_title">
                                    <h5 className="color_gray_550 custom_fs_32 fw_400 mt_15 custom_fs_m_27">
                                        <span class="m_dis_inline">Ready to Embrace </span>
                                        <span class="textBlock m_dis_inline">Your Love Story in Ink?</span>
                                    </h5>
                                    <p className="custom_fs_20 custom_fs_m_16 color_gray_550 mt_15 mb_15 lh_33">Download inckd now. Your perfect partner tattoo experience is just a click away!</p>
                                </li>
                                <li>
                                    <Link href="#" target="_blank">
                                        <Image
                                            priority
                                            alt="app store"
                                            src="/app-store-new.svg"
                                            width={134}
                                            height={41}
                                            blurDataURL={blurDataURL}
                                            placeholder="blur"
                                        />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank">
                                        <Image
                                            priority
                                            alt="google play"
                                            src="/g-play-new.svg"
                                            width={134}
                                            height={41}
                                            blurDataURL={blurDataURL}
                                            placeholder="blur"
                                        />
                                    </Link>
                                </li>
                                </ul>
                        </div>
                    </div>                   
                </div> 
            </div>
        </div>
    </section>
  )
}
