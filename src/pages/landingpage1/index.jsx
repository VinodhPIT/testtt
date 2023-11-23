import React from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import Banner from "@/landingComponents/banner/banner";
import UniquePartner from "@/landingComponents/uniquePartner-1/uniquePartner";
import PartnerTattoos from "@/landingComponents/partnerTattoos/tattoos";
import FindT from "@/landingComponents/findTattoos/findT";
import TrendingArtist from "@/landingComponents/trendingArtist/trendingArtist";
import TattooExperience from "@/landingComponents/tattooExperience/tattooExperience";
import TrendinginckdArtist from "@/landingComponents/trendinginckdArtist/trendinginckdArtist";
import WhypartnerTattoos from "@/landingComponents/whypartnerTattoos/whypartnerTattoos";
import Faq from "@/landingComponents/faq/faq";
import styles from "./landingcontent.module.css";

export default function Landing1() {
  return (
    <div>
      <Banner /> 
      <UniquePartner />
      <PartnerTattoos />
      <FindT />        
      <TrendingArtist />
      <TattooExperience />
      <TrendinginckdArtist />
      <WhypartnerTattoos />
      <Faq/>

    </div>
  );
}