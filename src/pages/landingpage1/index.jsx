import React from "react";
import Image from "next/image";

import Banner from "@/landingComponents/banner/banner";
import UniquePartner from "@/landingComponents/uniquePartner-1/uniquePartner";
import PartnerTattoos from "@/landingComponents/partnerTattoos/tattoos";
import FindT from "@/landingComponents/findTattoos/findT";
import TrendingArtist from "@/landingComponents/trendingArtist/trendingArtist";
import TattooExperience from "@/landingComponents/tattooExperience/tattooExperience";
import TrendinginckdArtist from "@/landingComponents/trendinginckdArtist/trendinginckdArtist";
import WhypartnerTattoos from "@/landingComponents/whypartnerTattoos/whypartnerTattoos";
import Faq from "@/landingComponents/faq/faq";

export default function Landing1() {
  return (
    <div>
      <Banner
        bannerTitle={"Discover Unforgettable Partner Tattoos with inckd"}
        bannerImg={"/young-beautiful-couple-posing-old-building-1.jpg"}
        bannerButton={"Know more about inckd"}
      />

      <UniquePartner
        title={"Celebrate Your Love Journey with Unique Partner Tattoos"}
        content="Celebrate Your Love Journey with Unique Partner Tattoos Are you and your partner searching for a distinctive way to express your love? Look no further! inckd is your gateway to connecting with skilled tattoo artists specializing in crafting unforgettable partner tattoos."
        img="/celebrate.png"
        alt="Celebrate Your Love Journey with Unique Partner Tattoos"
      />

      <PartnerTattoos
        mainTitle={"Partner Tattoos"}
        content1={"A Symbol of Everlasting Love"}
        content2={
          "Partner tattoos go beyond mere ink on skin; they are a profound expression of commitment and shared experiences. Here&apos;s why couples are choosing partner tattoos to commemorate their love"
        }
        tattooTitle1={"Symbol of Unity"}
        partnerTattoo1={"/Symbol-Unity.png"}
        tattooContent1={
          "Partner tattoos serve as a powerful symbol of unity, visually depicting the strength of your bond."
        }

        tattooTitle2={"Tailored to Your Story"}
        partnerTattoo2={"/Tailored-Story.png"}
        tattooContent2={
          "Work with our talented artists to create a custom design that uniquely tells your love story."
        }

        tattooTitle3={"Memories Etched in Ink"}
        partnerTattoo3={"/Memories-Etched-Ink.png"}
        tattooContent3={
          "Work with our talented artists to create a custom design that uniquely tells your love story."
        }
       
   
      
      />

      <FindT
        title="Find the tattoos with the right meaning for you"
        button="Find tattoos now"
        img1="/img-om.png"
        img2="/img-69.png"
      />
      <TrendingArtist />

      <TattooExperience
        mainTitle="Explore inckd for Your Perfect Partner Tattoo Experience"
        title1="Find the Right Artist"
        content1="Dive into our extensive network of tattoo artists, each skilled in the art of partner tattoos. Browse portfolios, find styles that resonate with you, and discover the perfect match."
        title2="Consultation Made Easy"
        content2="Connect directly with artists through inckd. Share your ideas, discuss design possibilities, and get expert guidance - all within the app."
        title3="Simple and Secure Booking"
        content3="Booking your partner tattoo experience is a breeze. Securely schedule your appointment through our user-friendly app, ensuring a convenient and stress-free process."
        title4="Create Timeless Memories"
        content4="Meet your chosen artist and witness the creation of a unique partner tattoo. Cherish the experience and the art that will forever symbolize your love."
      />

      <TrendinginckdArtist />

      <WhypartnerTattoos
        mainTitle="Why inckd for partner tattoos?"
        title1="Verified Artists"
        content1="We curate a selection of top-tier artists, ensuring a standard of excellence in both skill and professionalism."
        title2="User-Friendly Interface"
        content2="Navigate inckd effortlessly. Our app is designed with you in mind, providing a seamless experience from exploration to booking."
        title3="Secure Transactions"
        content3="Rest easy knowing that your payments are secure. inckd employs encryption technology for safe and worry-free transactions."
        embrace="Ready to Embrace"
        story="Your Love Story in Ink?"
        downloadApp="Download inckd now. Your perfect partner tattoo experience is just a click away!"
      />

      <Faq />
    </div>
  );
}
