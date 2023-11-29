import React from "react";
import path from "path";
import fs from "fs";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import Link from "next/link";

export default function ListingPage({ data, locale }) {

  const listing = data[locale];

  return (
    <div>
      <div className="bannerSections"> {/*  Dummy class name */}</div>

      <div className="listingArea">
        {/*  Dummy class name */}

        {listing.map((el) => {
          return (
            <div key={el.id}>

<Image
                src={el.imageUrl}
                alt={el.title}
                placeholder="blur"
                loading="lazy"
                blurDataURL={blurDataURL}
                width={376}
                height={240}
              />
              <h4>{el.title}</h4>

              <p>{el.desc}</p>

              <p>{el.tagTitle}</p>


             <Link href={`/listingDetail/${el.id}`}>Reead More</Link>


            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const filePath = path.join(process.cwd(), "src", "data", "blog.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);

  return {
    props: {
      data,
      locale: context.locale,
    },
  };
}
