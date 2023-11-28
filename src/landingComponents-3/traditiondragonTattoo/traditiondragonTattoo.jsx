import React, { useState } from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./traditiondragontattoo.module.css";
import Link from "next/link";
export default function traditiondragontattoo () {
  return ( 
    <section className="img_text_banner_box">
        <div className="col_full">
            <div className="img_text_box_wrapper">
                <div className="text_box_wrap right block_bg_gray_150 pt_75 m_pt_25 pb_100 m_pb_40">
                    <div className="img_text_box_inner container">
                        <div className="img_box_wrap justify_content_right m_pb_40">
                            <ul className="traditiondragon_list">
                                <li className="list_step_01">
                                    <Image
                                        src="/traditiondragontattoo-1.png"
                                        alt="Tradition Dragon Tattoos"
                                        width={1019}
                                        height={705}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                    />
                                </li>
                                <li className="list_step_02">
                                    <Image
                                        src="/traditiondragontattoo-2.png"
                                        alt="Tradition Dragon Tattoos"
                                        width={998}
                                        height={691}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                    />
                                </li>
                                <li className="list_step_03">
                                    <Image
                                        src="/traditiondragontattoo-3.png"
                                        alt="Tradition Dragon Tattoos"
                                        width={999}
                                        height={691}
                                        loading="lazy"
                                        placeholder="blur"
                                        blurDataURL={blurDataURL}
                                        layout="responsive"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className="text_box_content justify_content_start p_0 pl_7pc m_pl_0 m_min_h_reset">
                            <div className="text_box_content_inner max_w_100pc ">
                                <div className="d_flex flex_direction_column mb_30">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">Die Tradition von Drachen Tattoos</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">Drachen-Tattoos haben eine lange Tradition in verschiedenen Kulturen. Drachen Tattoos zeigen kulturelle Vielfalt: Chinesische Drachen bringen Glück, europäische Drachen schützen und bewachen.</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_30">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">Ein Drachen Tattoo wählen</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">Die Entscheidung für das richtige Tattoo kann eine persönliche Reise sein. Von der Wahl des Drachen-Typs bis zur Platzierung auf dem Körper - es gibt viele Überlegungen. Unsere Künstler begleiten dich, um zu gewährleisten, dass dein Tattoo deine Geschichte optimal darstellt.</p>
                                </div>
                                <div className="d_flex flex_direction_column mb_30">
                                    <h4 className="color_gray_550 custom_fs_32 fw_700 custom_fs_m_24 mb_20">Schritt um Schritt zu deinem Drachen Tattoo</h4>
                                    <p className="custom_fs_16 color_gray_550 mb_0 mt_0">Lade unsere App herunter und starte deine Reise zu einem einzigartigen Drachen-Tattoo. Wir begleiten dich von der Künstlerauswahl bis zur Fertigstellung des Tattoos, Schritt für Schritt zu deiner persönlichen Körperkunst.</p>
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
