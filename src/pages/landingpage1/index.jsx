import React from "react";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import Banner from "@/landingComponents/banner/banner";
import PartnerTattoos from "@/landingComponents/partnerTattoos/tattoos";
import TrendingArtist from "@/landingComponents/trendingArtist/trendingArtist";
import Faq from "@/landingComponents/faq/faq";


export default function Landing1() {
  return (
    <div>
      <Banner />

      <PartnerTattoos />

      <TrendingArtist />


<Faq/>





    </div>
  );
}
