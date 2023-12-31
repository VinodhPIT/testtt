import React from 'react'
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "@/components/slider/ImageSlider";
import useWindowResize from "@/hooks/useWindowSize";
import { blurDataURL ,APP_LINK_GOOGLE ,APP_LINK_APPLE} from "@/constants/constants";


export default function DownloadApps () {
  const { isMobileView } = useWindowResize();
  return (
    <div class={
        !isMobileView
          ? "text_box_wrap right app_download_box_wrap mb_0 block_bg_orange landing_app_download_wrap"
          : "text_box_wrap right app_download_box_wrap mb_0 block_bg_orange landing_app_download_wrap"
        }
      >
        <div class="img_text_box_inner"> 
          {!isMobileView ? (
            <div class="img_box_wrap w_50pc m_w_100pc">
              <ul class="app_download_img_list justify_content_start slider_resize d_slid_resize mr_0 pl_50 landing_app_download">
                <li>
                  <Image
                    src="/landing-download-app.png"
                    width={419}
                    height={630}
                    alt="Download the App & Explore more!"
                    priority
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="m_max_218"
                  />
                </li>
                <li>
                  <Image
                    src="/landing-download-app.png"
                    width={419}
                    height={630}
                    alt="Download the App & Explore more!"
                    priority
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="m_max_218"
                  />
                </li>
                <li>
                  <Image
                    src="/landing-download-app.png"
                    width={419}
                    height={630}
                    alt="Download the App & Explore more!"
                    priority
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="m_max_218"
                  />
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}

          <div class="text_box_content justify_content_start m_justify_content_center pl_40 w_50pc m_w_100pc">
            <div class="text_box_content_inner m_pr_0">
              <ul class="download_app max_w_100pc">
                <li class="download_app_title">
                  <h6 className="m_m_auto m_mxw_290">
                    <span className="m_dis_inline">Download the 
                    </span>
                    <span className="textBlock m_dis_inline">App & Explore more!
                    </span>
                  </h6>
                </li>
                <li>
                  <Link href={APP_LINK_APPLE} target="_blank">
                    <img src="/app-store-new.svg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link href={APP_LINK_GOOGLE} target="_blank">
                    <img src="/g-play-new.svg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="img_box_wrap pb_0">
          {isMobileView ? (
            <ImageSlider
              imagePaths={["/landing-download-app.png", "/landing-download-app.png", "/landing-download-app.png"]}
              imgAlt="Download the App & Explore more!"
              imgblurDataURL={blurDataURL}
              imgWidth={419}
              imgHeight={630}
            ></ImageSlider>
          ) : (
            ""
          )}
        </div>
    </div>



  )
}


