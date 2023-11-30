import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import styles from "./listing.module.css"
import path from "path";
import fs from "fs";


export default function ListingPage({ data, locale }) {

  const listing = data[locale];

 


  return ( 
    <div>

      <div className={styles.banner_block}>
        <div className={styles.banner_wrap}>
          <div className={styles.banner_item}>
            <div className={styles.banner}>
              <div className={styles.banner_inner}>
                <Image
                  src="/discover-unforgettable.png"
                  alt="banner"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  fill
                  objectFit="cover"
                  objectPosition="bottom"
                />
              </div>
            </div>
            <div className={`${""} ${styles.banner_content}`}>
              <div className={styles.banner_caption}>
                <h1>
                  <span className="m_dis_inline">Discover Unforgettable </span>
                  <span className="textBlock m_dis_inline">Partner Tattoos with inckd</span>
                </h1>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="img_text_banner_box">
        <div className="text_box_wrap full-block-wrap">
            <div className="img_text_box_inner">
                <div className="justify_content_start container w_100pc block_bg_gray_100">                                                  
                    <div className={`${'mt_65 mb_80 m_mb_30 m_mt_25'} ${styles.listing_pageContainer}`}>
                        <div className={styles.listing_grid_wrapper}>  

   {listing.map((el)=>{

return (
<div className={styles.listing_gridItem} key={el.id}>
                              <div className={styles.listing_grid_img_col}>
                                <Link href={el.url}>
                                  <Image
                                    src={el.imageUrl}
                                    alt="Partner tattoo artists near me"
                                    width={752}
                                    height={480}
                                    loading="lazy"
                                    placeholder="blur"
                                    blurDataURL={blurDataURL}
                                    layout="responsive"
                                  />
                                </Link>
                                <div className={styles.listing_grid_brand}>
                                 {el.tagTitle}
                                </div>
                              </div>      
                              <div className={styles.listing_grid_content_wrap}>
                                <Link href="#">
                                  <h5>{el.title}</h5>
                                </Link>
                                <p>{el.desc} </p>
                                <div className="w_100pc d_flex justify_content_end">
                                  <Link href="#" className="btn_primary btn_img btn_custom_48">
                                    Read more
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


)






   })}




                          

                        

                          
                          
                          

                        


                        
                          
                        </div>                        
                    </div>
                </div>
            </div>  
        </div>
    </section>  
      
      

    </div>

  );
}


export async function getServerSideProps(context) {
  const filePath = path.join(process.cwd(), "src", "data", "blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
console.log(data,'cdd')
 

  return {
    props: {
      data,
      locale: context.locale,
    },
  };
}