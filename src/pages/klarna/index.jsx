import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./custom.module.css";
import {
  APP_LINK_APPLE,
  APP_LINK_GOOGLE,
  blurDataURL,
} from "@/constants/constants";
import CarouselKlarna from "@/components/carousel/CarouselKlarna";
import ImageSlider from "@/components/slider/ImageSlider";
import useWindowResize from "@/hooks/useWindowSize";
import useTranslation from "next-translate/useTranslation";
import { useGlobalState } from "@/context/Context";
import { getLocaleProps } from "@/utils/getlocale";

export default function Klarna({ locale }) {
  const { getLocale } = useGlobalState();
  const { isMobileView } = useWindowResize();
  const { t } = useTranslation();

  useEffect(() => {
    try {
      getLocale({
        locale,
      });
    } catch (error) {}
  }, [locale]);

  const items = [
    {
      heading: t("common:klarnaPage.heading1"),
      image: "/paylater_bg.svg",
      text: t("common:klarnaPage.carouselText1"),
      option1: t("common:klarnaPage.option1"),
    },
    {
      heading: t("common:klarnaPage.heading2"),
      image: "/Group.svg",
      text: t("common:klarnaPage.carouselText2"),
      option1: t("common:klarnaPage.option2"),
    },
    {
      heading: t("common:klarnaPage.heading3"),
      image: "/Group 82677.svg",
      text: t("common:klarnaPage.carouselText3"),
      option1: t("common:klarnaPage.option3"),
    },
    {
      heading: t("common:klarnaPage.heading4"),
      image: "/Group 82674.svg",
      text: t("common:klarnaPage.carouselText4"),
      option1: t("common:klarnaPage.option4"),
    },
    {
      text: "Learn about greek mythology and find the tattoo with the right meaning for you in the app",
      option1: "Wake",
      heading: "Itzscuintli",
    },
  ];
  return (
    <>
    <Head>
        <title>
          Flexible tattoo payments with customized installment plans
        </title>
        <meta
          name="description"
          content="
          Get your dream tattoo with ease! Pay for tattoos in convenient installments, tailored to your budget with our individual payment plans"
        />
        <meta
          name="keywords"
          content="Tattoo, Tattoos, Tattoo Payment, Tattoo Installments, Tattoo paymentplan, Tattoo budget, Tattooartist, Tattoo Klarna, Klarna"
        />
      </Head>
      <main>
        <div className="page-wrapper">
          <div className={styles.banner_block}>
            <div className={styles.banner_wrap}>
              <div className={styles.banner_item}>
                <div className={styles.banner}>
                  <div className={styles.banner_inner}>
                    <Image
                      src="/pexels-cottonbro-studio-5320148-14-klarna.png"
                      alt="pexels"
                      fill
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      priority
                      objectFit="cover"
                      className="mob_hidden"
                    />

                    <Image
                      src="/pexels-cottonbro-studio-5320148-14-klarna-mob.png"
                      alt="pexels"
                      fill
                      blurDataURL={blurDataURL}
                      placeholder="blur"
                      priority
                      objectFit="cover"
                      className="desk_hidden"
                    />
                  </div>
                </div>
                <div className={styles.banner_content}>
                  <div className={styles.banner_content_wrap_klarna}>
                    <div className={styles.banner_caption}>
                      <Image
                        src="/Klarna-logotype(white.svg)-19.svg"
                        alt="klarna-logo"
                        width={186}
                        height={41}
                        priority
                      />

                      <h1 class="color_pink">
                        <span>{t("common:klarnaPage.bannerTitle1")}</span>
                        <span className="textBlock">
                          {t("common:klarnaPage.bannerTitle1-Sub")}
                        </span>
                      </h1>
                      <p className="m_mxw_320">
                        {t("common:klarnaPage.bannerTitle2")}
                      </p>
                    </div>
                    <ul className={styles.download_app}>
                      <li className={styles.download_app_title}>
                        <h6>Download our app from</h6>
                      </li>
                      <li>
                        <Link href={APP_LINK_APPLE} target="_blank">
                          <img src="/app-store-new.svg" alt="apple store" />
                        </Link>
                      </li>
                      <li>
                        <Link href={APP_LINK_GOOGLE} target="_blank">
                          <img src="/g-play-new.svg" alt="google play" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="img_text_banner_box">
            <div className="col_full">
              <div className="img_text_box_wrapper klarna_wrap">
                <div class="text_box_wrap right">
                  <div class="img_text_box_inner">
                    <div class="text_box_content justify_content_start">
                      <div class="text_box_content_inner max_w_100pc m_pr_0">
                        <h2 class="color_gray_550">
                          {" "}
                          {t("common:klarnaPage.title1")}
                        </h2>
                        <ul class="custom-listing how_work_list">
                          <li>
                            <img
                              src="/download.svg"
                              alt="Download the inckd. App"
                            />
                            <span>{t("common:klarnaPage.download-inckd")}</span>
                          </li>
                          <li>
                            <img
                              src="/bookmark-square-minimalistic.svg"
                              alt="Accept an offer from your favourite artist."
                            />
                            <span>
                              {t("common:klarnaPage.accept-an-offer")}
                            </span>
                          </li>
                          <li>
                            <img
                              src="/klarna-icon-black.svg"
                              alt="Select Klarna as payment option."
                            />
                            <span>
                              {" "}
                              {t("common:klarnaPage.select-Klarna")}
                            </span>
                          </li>
                          <li>
                            <img
                              src="/heart-icon-black.svg"
                              alt="Get your tattoo done."
                            />
                            <span>
                              {" "}
                              {t("common:klarnaPage.get-your-tattoo")}
                            </span>
                          </li>
                          <li>
                            <img
                              src="/money-bag.svg"
                              alt="Pay later or in instalments."
                            />
                            <span> {t("common:klarnaPage.pay-later")}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="img_box_wrap block_bg_orange justify_content_center block_bg_gradient_3">
                      <div class="bg_overlay_img z_index_1">
                        <img
                          src="/inckd-klarna-works.png"
                          alt="How it Works!"
                          class="svg_h_inherit img_box_shadow_2 m_klarna_work_reset h_390 p_0"
                        />
                      </div>
                      <div class="bg_overlay_img">
                        <img
                          src="/dragon.svg"
                          alt="How it Works!"
                          class="svg_max_h_100 max_w_100pc"
                        />
                      </div>

                      <Image
                        src="/pay-klarna.png"
                        alt="How it Works!"
                        width={500}
                        height={500}
                        priority
                        layout="responsive"
                        placeholder="blur"
                        className="mob_hidden"
                        blurDataURL={blurDataURL}
                      />
                      <Image
                        src="/pay-klarna-M.png"
                        alt="How it Works!"
                        width={500}
                        height={500}
                        priority
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        className="desk_hidden"
                      />
                    </div>
                  </div>
                </div>

                <div class="text_box_wrap left ">
                  <div class="img_text_box_inner">
                    <div class="img_box_wrap block_bg_gradient_1">
                      <div class="klarna_bg">
                        <img src="/klarna-white.svg" alt="" />
                      </div>
                      <div class="box_text_img_over color_pink m_left_0 m_right_0 m_text_center">
                        <h2>
                          <span>{t("common:klarnaPage.title2")}</span>
                          <span className="textBlock">
                            {t("common:klarnaPage.title2-Sub1")}
                          </span>
                          <span className="textBlock">
                            {t("common:klarnaPage.title2-Sub2")}
                          </span>
                        </h2>
                      </div>

                      <Image
                        priority={true}
                        src="/choose-pay.png"
                        alt="Pay all at once? Never again!"
                        width={500}
                        height={711}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        layout="responsive"
                        className="mob_hidden"
                      />
                      <Image
                        priority={true}
                        src="/choose-pay-M.png"
                        alt="Pay all at once? Never again!"
                        width={500}
                        height={711}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        layout="responsive"
                        className="desk_hidden"
                      />
                    </div>
                    <div class="text_box_content justify_content_start">
                      <div class="text_box_content_inner custom_carousel_wrap">
                        <CarouselKlarna items={items} />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text_box_wrap right ">
                  <div class="img_text_box_inner m_switcher">
                    <div class="text_box_content justify_content_start align_item_start">
                      <div class="text_box_content_inner w_100pc custom_full_block pr_0 available_list">
                        <h2 class="m_text_center">Availability</h2>
                        <ul class="custom-listing-grid">
                          <li>
                            <img src="/austria.svg" alt="AU" />
                            <span>AU</span>
                          </li>
                          <li>
                            <img src="/germany.svg" alt="DE" />
                            <span>DE</span>
                          </li>
                          <li>
                            <img src="/france.svg" alt="FR" />
                            <span>FR</span>
                          </li>
                          <li>
                            <img src="/italy.svg" alt="IT" />
                            <span>IT</span>
                          </li>
                          <li>
                            <img src="/spain.svg" alt="ES" />
                            <span>ES</span>
                          </li>

                          <li>
                            <img src="/switzerland.svg" alt="CH" />
                            <span>CH</span>
                          </li>
                          <li>
                            <img src="/united-kingdom.svg" alt="GB" />
                            <span>GB</span>
                          </li>
                          <li>
                            <img src="/belgium.svg" alt="BE" />
                            <span>BE</span>
                          </li>
                          <li>
                            <img src="/denmark.svg" alt="DK" />
                            <span>DK</span>
                          </li>
                          <li>
                            <img src="/finland.svg" alt="FI" />
                            <span>FI</span>
                          </li>

                          <li>
                            <img src="/greece.svg" alt="GR" />
                            <span>GR</span>
                          </li>
                          <li>
                            <img src="/ireland.svg" alt="IE" />
                            <span>IE</span>
                          </li>
                          <li>
                            <img src="/netherlands.svg" alt="NL" />
                            <span>NL</span>
                          </li>
                          <li>
                            <img src="/portugal.svg" alt="PT" />
                            <span>PT</span>
                          </li>
                        </ul>

                        <h5>Available soon</h5>
                        <ul class="custom-listing-grid available_list_soon">
                          <li>
                            <img src="/norway.svg" alt="NO" />
                            <span>NO</span>
                          </li>
                          <li>
                            <img src="/poland.svg" alt="PL" />
                            <span>PL</span>
                          </li>
                          <li>
                            <img src="/romania.svg" alt="RO" />
                            <span>RO</span>
                          </li>
                          <li>
                            <img src="/sweden.svg" alt="SE" />
                            <span>SE</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="img_box_wrap block_bg_gradient_1 justify_content_right img-btm-7pc m_justify_content_center">
                      <div class="klarna_bg klarna_page_align">
                        <img src="/klarna-white.svg" alt="" />
                      </div>
                      <div class="box_text_img_over color_pink txt-right-align">
                        <h2 class="text_right m_text_center m_mxw_290">
                          <span className="m_dis_inline">
                            {t("common:klarnaPage.title4")}{" "}
                          </span>
                          <span className="textBlock m_dis_inline">
                            {t("common:klarnaPage.title4-Sub1")}{" "}
                          </span>
                          <span className="textBlock m_dis_inline">
                            {t("common:klarnaPage.title4-Sub2")}
                          </span>
                        </h2>
                      </div>

                      <Image
                        priority={true}
                        src="/tattoo-klarna.png"
                        alt="Where i can pay"
                        width={500}
                        height={711}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        layout="responsive"
                        className="mob_hidden"
                      />
                      <Image
                        priority={true}
                        src="/tattoo-klarna-M.png"
                        alt="Where i can pay"
                        width={500}
                        height={711}
                        placeholder="blur"
                        blurDataURL={blurDataURL}
                        layout="responsive"
                        className="desk_hidden"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class={
                    !isMobileView
                      ? "text_box_wrap right app_download_box_wrap block_bg_pink down_klarna-right-spc"
                      : "text_box_wrap right app_download_box_wrap block_bg_pink_mob down_klarna-right-spc"
                  }
                >
                  <div class="img_text_box_inner">
                    <div class="text_box_content justify_content_start m_justify_content_center m_pt_45">
                      <div class="text_box_content_inner m_pr_0">
                        <ul class="download_app">
                          <li class="download_app_title">
                            <h6 className="m_m_auto m_mxw_290">
                              <span className="m_dis_inline">
                                {t("common:downloadApp")}
                              </span>
                              <span className="textBlock m_dis_inline">
                                {" "}
                                {t("common:downloadApp-Sub1")}
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
                    {!isMobileView ? (
                      <div class="img_box_wrap">
                        <ul class="app_download_img_list img_box_img_m20pc justify_content_right slider_resize d_slid_resize">
                          <li>
                            <Image
                              src="/Klarna1.png"
                              width={218}
                              height={446}
                              alt="Download the App & Explore more!"
                              priority
                              placeholder="blur"
                              blurDataURL={blurDataURL}
                              className="m_max_218"
                            />
                          </li>
                          <li>
                            <Image
                              src="/Klarna2.png"
                              width={218}
                              height={446}
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
                  </div>
                  <div className="img_box_wrap">
                    {isMobileView ? (
                      <ImageSlider
                        imagePaths={["/Klarna1.png", "/Klarna2.png"]}
                        imgAlt="Picture of the author"
                        imgblurDataURL={blurDataURL}
                        imgWidth={215}
                        imgHeight={443}
                      ></ImageSlider>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { props } = await getLocaleProps(context);
  return {
    props: {
      locale: props.locale,
    },
  };
}
