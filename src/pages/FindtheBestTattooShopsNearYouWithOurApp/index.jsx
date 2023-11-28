import React, { useState } from "react";
import Head from "next/head";

import Banner from "@/landingComponents/banner/banner";

import TwocolumnSection from "@/landingComponents/TwoColumSection/twoColumnSection";
import FullWidthBlock from "@/landingComponents/fullwidthBlock/fullwidthBlock";

export default function TattooIdeasForMen() {
  const currentPage = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      <Head>
        <title>Find the Finest Tattoo Shops Near Me for Exceptional Ink</title>
        <meta
          name="description"
          content="Discover the perfect tattoo shop with our app. From body piercings to intricate designs, find skilled artists near you. Transform your vision into timeless art."
        />
        <meta
          name="keywords"
          content="tattoo shops, tattoo artists, body piercings, intricate designs, best tattoo app, exceptional ink, unique tattoo styles, personalized consultations"
        />

        <meta
          property="og:title"
          content="Exploring Tattoo Ideas for Men: From Concept to Canvas | Inckd"
        />
        <meta
          property="og:description"
          content="Discover the perfect tattoo ideas for men at Inckd. Express yourself with small tattoos, tribal designs, cross tattoos, and more. Explore diverse tattoo styles and find inspiration for 2023."
        />
        <meta
          property="og:title"
          content="Find the Finest Tattoo Shops Near Me for Exceptional Ink"
        />
        <meta
          property="og:description"
          content="Discover the perfect tattoo shop with our app. From body piercings to intricate designs, find skilled artists near you. Transform your vision into timeless art."
        />
        <meta
          property="og:image"
          content="/young-beautiful-couple-posing-old-building-1.jpg"
        />
        <meta property="og:url" content={currentPage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Find the Finest Tattoo Shops Near Me for Exceptional Ink"
        />
        <meta
          name="twitter:description"
          content="Discover the perfect tattoo shop with our app. From body piercings to intricate designs, find skilled artists near you. Transform your vision into timeless art."
        />

        <meta
          name="twitter:image"
          content="[URL to an image relevant to the content]"
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />
      </Head>

      <div>
        <Banner
          bannerTitle="Find the Finest Tattoo Shops Near Me for Exceptional Ink"
          subTitlte="Are you searching for the perfect tattoo shop to bring your vision to life? Find the best tattoo artists and shops near you with our app. It guarantees a smooth process from consultation to the final tattoo.
        "
          alt="Exploring Tattoo Ideas for Men"
          bannerImg={"/young-beautiful-couple-posing-old-building-1.jpg"}
          bannerButton={"Know more about inckd"}
        />

        <FullWidthBlock
          img="/icon_hearts.svg"
          alt="Hearts"
          title={"Why Choose Our Tattoo Booking App?"}
          content="No more hassles with long waiting times or phone calls. Use our easy app to book your tattoo appointment instantly, ensuring you get the artist and time you want. Our listed tattoo shops and artists offer a diverse range of services, from body piercings to intricate tattoo designs. You can find artists who specialize in various tattoo styles, ensuring your unique preferences are met.Discover peace of mind as you explore our network of tattoo artists and shops. Within our community, you'll find skilled and experienced individuals who are dedicated to their craft. Your journey begins with our team of artists, each poised to collaborate with you in crafting a custom design that mirrors your unique style and vision.Our commitment is to provide you with tattoos of the highest quality and timeless appeal. Booking an appointment is a seamless process that opens the door to personalized consultations with your chosen tattoo artist. Our staff is friendly and ready to assist you in transforming your idea into reality. They can help you whether your idea is well-defined or still a bit unclear.

        "
        />

        <TwocolumnSection
          title1="Booking with Confidence
"
          content1="When it comes to finding the best tattoo artist and tattoo shop, trust our app to guide you. We studied top competitors to find the best match for you.
"
          title2="Enhance Your Tattoo Journey
"
          content2="Your tattoo journey is a unique expression of yourself, and we're here to make it exceptional. Our app connects you with tattoo artists and shops that value your individuality, regardless of tattoo size.
Embark on your tattoo journey with confidence. Our app empowers you to discover top-rated tattoo shops, ensuring your experience is as brilliant as your ink. Book your appointment today and celebrate your unique style with the perfect tattoo artist for you.

"
        />
      </div>
    </>
  );
}
