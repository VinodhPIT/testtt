import React from "react";
import styles from "@/pages/tattoo/tattoodetail.module.css";
import Link from "next/link";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import Load from '@/components/pageLoad'
import style from "@/components/styles/listing.module.css";

const All = ({ data ,loading}) => {

  return (
    <div className={styles.galleryWrapper} >
      
     
        <div className={styles.grid_wrapper_tattoo}>
          {data.map((item) => (
            <Link
            href={
              item.tattoo_type === "normal"
                ? `/tattoo/${item.tattoo_uid}`
                :
                 `/flash/${item.tattoo_uid}`
               
            }
              
              className={styles.listing_gridItem}
              key={item.tattoo_uid}
            >
              <Image
                alt={item.tattoo_type}
                src={item.image}
               layout="fill"
               loading="lazy"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={blurDataURL}
                quality={62}
              />
{item.tattoo_type !== "normal" && (
  item.min_price !== null && item.max_price !== null ? (
    <div className={styles.priceBox}>
      <p style={{ margin: "0" }}>
      {item.currency.code} {item.min_price} - {item.max_price}
      </p>
    </div>
  ) : item.min_price !== null ? (
    <div className={styles.priceBox}>
      <p style={{ margin: "0" }}>
      {item.currency.code} {item.min_price}
      </p>
    </div>
  ) : null
)}



            </Link>
          ))}
        </div>

    </div>
  );
};

export default All;
