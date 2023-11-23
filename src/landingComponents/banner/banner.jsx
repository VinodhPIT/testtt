import React from 'react'
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from './banner.module.css'


export default function Banner() {
  return (
    <div className={styles.header}>
      <header>
        <div className="container">
          <div className={styles.block_wrap}>
            <span className="logo_section">
              <Link href={"/"} className={styles.header_logo}>
                <Image
                  src="/Inckd-logo-new.svg"
                  width={106}
                  height={31}
                  alt="logo"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  //fill //position-absolute
                  //objectFit="cover"    
                  //objectPosition='bottom'
                  layout="responsive"                
                />
              </Link>
            </span>
            <span className="header_right_btn">
              <button type="button" className="btn btn_primary btn_regist">
                Signup now - its free
              </button>
            </span>
          </div>    
        </div>
      </header>

      <div className={styles.banner_block}>
        <div className={styles.banner_wrap}>
          <div className={styles.banner_item}>
            <div className={styles.banner}>
              <div className={styles.banner_inner}>
                <Image
                  src="/young-beautiful-couple-posing-old-building-1.jpg"                 
                  alt="banner"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
            <div className={styles.banner_content}>
              <div className={styles.banner_caption}>  
                <h1>
                  <span>Discover Unforgettable Partner Tattoos with inckd</span>                    
                </h1>
                <a class="btn_primary btn_img btn_xxl" href="#">
                  Know more about inckd
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
                </a>
                </div> 
            </div>
          </div>
        </div>
      </div>

      <div className={styles.social_icons}>
        <ul>          
          <li>
            <Link href="#" target="_blank">
            <Image
                src={"/icon-insta-header.svg"}
                alt="Instagram"
                width={33}
                height={33}
                priority
              />    
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank">
            <Image
                src={"/icon-fb-header.svg"}
                alt="Facebook"
                width={33}
                height={33}
                priority
              />            
            </Link>
          </li>
          <li>
            <Link href="#" target="_blank">
            <Image
                src={"/icon-inkd-header.svg"}
                alt="LinkedIn"
                width={33}
                height={33}
                priority
              />
            </Link>           
          </li>
          <li>
            <Link href="#" target="_blank">
              <Image
                  src={"/icon-mail-header.svg"}
                  alt="Mail"
                  width={33}
                  height={33}
                  priority
                />
            </Link>
          </li>
        </ul>
      </div>




      
      
    </div>
  )
}