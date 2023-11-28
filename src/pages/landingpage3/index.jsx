import React from 'react'
import Image from 'next/image'
import {blurDataURL} from '@/constants/constants'
import Banner from "@/landingComponents-3/banner/banner";
import UniquePartner from "@/landingComponents-3/uniquePartner/uniquePartner";
import PartnerTattoos from "@/landingComponents-3/partnerTattoos/tattoos";
import DragonTattoo from '@/landingComponents-3/dragonTattoo/dragonTattoo';
import DragonSlider from '@/landingComponents-3/dragonSlider/dragonSlider';
import WhydragonTattoo from '@/landingComponents-3/whydragonTattoo/whydragonTattoo';
import ProcessdragonTattoo from '@/landingComponents-3/processdragonTattoo/processdragonTattoo'
import Traditiondragontattoo from '@/landingComponents-3/traditiondragonTattoo/traditiondragonTattoo';
import DownloadApps from '@/landingComponents-3/downloadApps/downloadApps';

export default function Landing3() {
  return (
    <div>
      <Banner
        bannerTitle={"Discover Unforgettable Partner Tattoos with inckd"}
        bannerImg={"/young-beautiful-couple-posing-old-building-1.jpg"}
        bannerButton={"Know more about inckd"}
      />
      <UniquePartner
        title={"Die Symbolik von Drachen Tattoos"}
        content="Drachen haben in vielen Kulturen eine reiche Symbolik. Asiatische Drachen bedeuten Glück und Weisheit, während westliche Drachen für Stärke und Abenteuer stehen. Jedes Drachen-Tattoo erzählt eine einzigartige Geschichte. Die mystische Aura, die Drachen umgibt, macht sie zu beliebten Motiven für Tätowierungen weltweit."
        img="/Drachen-Tattoo-Idee-1.png"
        alt="Die Symbolik von Drachen Tattoos"
      />

      <PartnerTattoos
        mainTitle={"Entdecke Vielfalt in Drachen Tattoo-Designs"}
        content2={"Die Vielfalt der Drachen-Tattoo-Designs ist ebenso faszinierend wie die Geschichte, die sie erzählen. Von realistischen Darstellungen bis zu künstlerischen Interpretationen bieten Drachen Tattoos eine breite Palette kreativer Möglichkeiten. In unserer Galerie findest du Inspiration für dein eigenes, einzigartiges Tattoo."
        }              
      />

      <DragonTattoo
        mainTitle="Die Kunst der Drachen Tätowierung"
        content1="Das Tätowieren eines Drachens erfordert Geschick und Verständnis für die Symbolik. Unsere erfahrenen Künstler können dir helfen, ein ästhetisches Drachen-Tattoo zu gestalten, das deine persönliche Geschichte zeigt."
        title1="Die Kunst der Drachen Tätowierung"
        content2="Das Tätowieren eines Drachens erfordert Geschick und Verständnis für die Symbolik. Unsere erfahrenen Künstler können dir helfen, ein ästhetisches Drachen-Tattoo zu gestalten, das deine persönliche Geschichte zeigt."
        title3="Inspirierende Drachen Tattoo Designs"
        content4="Bereite dich darauf vor, in die Welt der inspirierenden Tattoo Designs einzutauchen. Von traditionellen Drachen bis zu modernen Interpretationen bieten wir einen Einblick in die künstlerische Vielfalt dieses fesselnden Motivs."
        title2="Drachen Tattoo Bedeutung"
        content3="Die Bedeutung eines Drachen-Tattoos reicht weit über die Oberfläche hinaus. Es symbolisiert nicht nur Stärke und Macht, sondern kann auch für Schutz, Weisheit oder persönliche Transformation stehen. Erforsche die Bedeutung von Drachen-Tattoos und finde heraus, welcher Teil deiner Geschichte passt."
      />
      <DragonSlider />

      <WhydragonTattoo />

      <ProcessdragonTattoo />

      <Traditiondragontattoo />

      <DownloadApps />

      
      

      
    </div>
  )
}
