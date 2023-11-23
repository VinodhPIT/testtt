import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./findtattoos.module.css"


export default function FindT() {
  return (
    <div className="text_box_wrap right app_download_box_wrap mb_0 block_bg_aero_blue">
        <div className="img_text_box_inner container">
          <div className="text_box_content justify_content_start pl_0">
            <div className="text_box_content_inner w_100pc m_pr_0">
              <div className={styles.common_full_block}>
                <h2>Find the tattoos with the right meaning for you </h2>
                <button type="button" className="btn_primary btn_img btn_xxl">
                  Find tattoos now
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

          <div className="img_box_wrap">
            <ul className="app_download_img_list mt_mb_6pc after_none align_item_center mr_0 justify_content_right ">
              <li className="no_filter">
                <Image
                  src="/img-om.png"                 
                  alt="img"
                  width={550}
                  height={550}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  layout="responsive"
                />                 
              </li>
              <li className="no_filter">
                <Image
                  src="/img-69.png"                 
                  alt="img"
                  width={550}
                  height={550}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  layout="responsive"
                />                 
              </li>  
            </ul>
          </div>
        </div>
      </div>
  )
}


