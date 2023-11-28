import React, { useState } from "react";
import Head from "next/head";

import Banner from "@/landingComponents/banner/banner";
import UniquePartner from "@/landingComponents/uniquePartner-1/uniquePartner";
import PartnerTattoos from "@/landingComponents/partnerTattoos/tattoos";
import FindT from "@/landingComponents/findTattoos/findT";
import TrendingArtist from "@/landingComponents/trendingArtist/trendingArtist";
import TattooExperience from "@/landingComponents/tattooExperience/tattooExperience";
import TrendinginckdArtist from "@/landingComponents/trendinginckdArtist/trendinginckdArtist";
import WhypartnerTattoos from "@/landingComponents/whypartnerTattoos/whypartnerTattoos";


export default function TattooIdeasForMen() {
  const [data, setData] = useState([


   
    {
      id: 1,
      tattooName: "Cross Tattoos",
      description:
        "Symbolizing faith, cross tattoos are timeless classics. Choose a basic cross or a stylish design, these tattoos have deep meaning and are popular among men of all ages.",
    },
    {
      id: 2,
      tattooName: "Star Tattoo",
      description:
        " Reach for the stars with a star tattoo. Symbolizing guidance and aspiration, star tattoos come in various styles, from simple outlines to elaborate cosmic scenes.Unveiling the Artistry: Tattoo Design and Styles",
    },
    {
      id: 3,
      tattooName: "Tattoo Design",
      description:
        "Symbolizing faith, cross tattoos are timeless classics. Choose a basic cross or a stylish design, these tattoos have deep meaning and are popular among men of all ages.",
    },

    {
      id: 4,
      tattooName: "Men’s Tattoos",
      description:
        "The world of men's tattoos is vast and diverse. From traditional to contemporary, men's tattoos encompass a range of styles and themes. Find inspiration in the stories told by tattoos, each inked creation a unique expression of masculinity.",
    },

    {
      id: 5,
      tattooName: "Dragon Tattoo",
      description:
        " Embrace the mystique of dragon tattoos. These mythical creatures symbolize strength, wisdom, and good fortune. Dragon tattoos allow for artistic freedom, with variations ranging from fierce and bold to intricate and detailed.",
    },

    {
      id: 6,
      tattooName: "Geometric Tattoos",
      description:
        "Precision meets artistry in geometric tattoos. Explore the beauty of shapes and lines, creating visually stunning tattoos with a modern edge. Geometric tattoos are a playground for creativity, offering endless possibilities.",
    },

    {
      id: 7,
      tattooName: "Feather Tattoos",
      description:
        "Light as a feather, these tattoos exude a delicate yet profound allure. Feather tattoos symbolize freedom, spirituality, and connection to nature. Let the feathers tell a story with their gentle elegance.",
    },

    {
      id: 8,
      tattooName: "Sleeve Tattoo",
      description:
        "For those craving an extensive canvas, a sleeve tattoo is a masterpiece. Sleeve tattoos are like art on the arm. They have lots of space for detailed designs, stories, or a group of smaller tattoos that go together.",
    },

    {
      id: 9,
      tattooName: "Eagle Tattoo",
      description:
        "Soar to new heights with an eagle tattoo. Symbolizing freedom, power, and vision, eagle tattoos captivate with their majestic presence. From realistic portrayals to stylized designs, an eagle tattoo is a bold choice.",
    },
  ]);




  const [tattooStyles, setTattooStyles] = useState([
    {
      id: 1,
      tattooName: "Tattoo Artist",
      description:
        "Behind every remarkable tattoo is a skilled tattoo artist. Work with a skilled tattoo artist who gets your ideas and can turn them into an amazing tattoo. They have the technical skills and creativity to make your tattoo special and one-of-a-kind",
    },
    {
      id: 2,
      tattooName: "Rose Tattoo",
      description:
        "Choose a beautiful rose tattoo to symbolize love, beauty, and passion. Customize it in various styles, from realistic to artistic designs, for a romantic touch",
    },
    {
      id: 3,
      tattooName: "Forearm tattoos",
      description:
        "are great for showing off your ink. They can be their own design or part of a larger one. You can choose the size and style that suits you.",
    },

 

    {
      id: 4,
      tattooName: "Tattoo Designs for Men",
      description:
        "Dive into the plethora of tattoo designs tailored for men. Explore themes like nature, animals, quotes, or opt for a custom design that holds personal significance. You have many choices for a tattoo design that matches your personality."
        
    },

    {
      id: 5,
      tattooName: "Lion Tattoo",
      description:
        "Roar with confidence with a lion tattoo. Symbolizing strength, courage, and leadership, lion tattoos command attention. Choose a regal mane or a fierce expression to capture the essence of the king of the jungle.",
    },

    {
      id: 6,
      tattooName: "Wolf Tattoo",
      description:
      " Embody the spirit of the wild with a wolf tattoo. Wolves symbolize loyalty, instinct, and freedom. A wolf tattoo has a mysterious appeal for those connected to their primal instincts."
      
    },

    {
      id: 7,
      tattooName: "Religious Tattoos",
      description:
        "For those seeking spiritual expression, religious tattoos offer a profound way to showcase faith. From religious symbols to depictions of revered figures, religious tattoos are a timeless choice.",
    },
  ]);









  return (
    <>
      <Head>
        <title>
          Exploring Tattoo Ideas for Men: From Concept to Canvas | Inckd
        </title>
        <meta
          name="description"
          content="Discover the perfect tattoo ideas for men at Inckd. Express yourself with small tattoos, tribal designs, cross tattoos, and more. Explore diverse tattoo styles and find inspiration. From dragon tattoos to geometric masterpieces, our guide takes you from concept to canvas. Connect with skilled tattoo artists and dive into our curated image gallery. Start your unique tattoo journey today.
          "
        />
        <meta
          name="keywords"
          content="tattoo ideas for men, small tattoos, tribal tattoos, cross tattoos, star tattoo, tattoo design, men's tattoos, dragon tattoo, geometric tattoos, feather tattoos, sleeve tattoo, eagle tattoo, tattoo styles, ideas for men in 2023, tattoo artist, rose tattoo, forearm tattoos, tattoo designs for men, lion tattoo, wolf tattoo, religious tattoos"
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
          property="og:url"
          content="https://www.inckd.com/tattoo/bc4c6538-7f5b-4e53-b71b-09d670a0b8fc"
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/hllincd-bucket/profile/image/None_DCD9D1C0-8166-4202-9CD0-AF23821205A7.jpg"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta
          name="twitter:title"
          content="Exploring Tattoo Ideas for Men: From Concept to Canvas | Inckd"
        />
        <meta
          name="twitter:description"
          content="Discover the perfect tattoo ideas for men at Inckd. Express yourself with small tattoos, tribal designs, cross tattoos, and more. Explore diverse tattoo styles and find inspiration for 2023."
        />
        <meta
          name="twitter:image"
          content="https://storage.googleapis.com/hllincd-bucket/profile/image/None_DCD9D1C0-8166-4202-9CD0-AF23821205A7.jpg"
        />
      </Head>

      <div>
        <Banner
          bannerTitle={"Exploring Tattoo Ideas for Men: From Concept to Canvas"}
          subTitlte="Are you on the hunt for the perfect tattoo ideas for men? You're in the right place! Tattoos are a way to express yourself and tell a story. Our guide will help you explore the world of men's tattoos, whether you're new to it or already a fan.
        "
          alt="Exploring Tattoo Ideas for Men"
          bannerImg={"/young-beautiful-couple-posing-old-building-1.jpg"}
          bannerButton={"Know more about inckd"}
        />

        <UniquePartner
          title="Crafting Your Unique Tattoo Journey"
          content="Getting a tattoo is a personal and life-changing experience. Each tattoo represents a story and important moments in your life. Whether you prefer religious, eagle, or rose tattoos, your choice shows who you are as a person."
          img="/pexels-cottonbro-studio-5320037.jpg"
          alt="Celebrate Your Love Journey with Unique Partner Tattoos"
        />

        <PartnerTattoos
          mainTitle="Exploring Diverse Tattoo Styles"
          content1="Small Tattoo Ideas for Men"
          content2="Let's begin with the charm of small tattoos. These gems are perfect for those seeking subtle yet meaningful designs. From minimalist symbols to tiny icons, small tattoos can be a powerful expression of your personality.
        If you like cultural symbols, think about getting tribal tattoos. These designs have deep roots in various cultures, reflecting strength, heritage, and unity. From intricate patterns to bold lines, tribal tattoos make a bold statement.
        "
        button={'Explore more'}
          data={data}
          partnerTattoo1={"/Symbol-Unity.png"}

          slide1={"slide1"}

         
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
          title1="Expressing Individuality Regardless of Tattoo Size:"
          content1="Small tattoo ideas for men hold as much significance as larger pieces. Every tattoo, regardless of size, contributes to the tapestry of your self-expression. Whether it's a discreet symbol or an extensive sleeve, your tattoo is a reflection of your identity.
        "
          title2="Celebrating Diversity in Tattoo Styles"
          content2="The diversity of tattoo styles allows for a myriad of choices. From classic cross tattoos to contemporary geometric designs, each style offers a unique way to convey your personality. Embrace the variety and choose a style that resonates with your aesthetic sensibilities.
        "
          title3="Honoring Tradition with Tribal Tattoos"
          content3=" For those with a connection to cultural heritage, tribal tattoos pay homage to tradition. These designs, rooted in ancient symbolism, bring a sense of identity and belonging. Explore the intricate patterns and meanings behind tribal tattoos.
        "
          title4="New tattoo ideas for men in 2023"
          content4="Keep up with the latest trends by exploring innovative ideas. Tattoo styles change and include new techniques and concepts. Be a trendsetter as you start your tattoo journey this year. Choose a lone wolf or a group, a wolf tattoo has a mysterious appeal for those connected to their primal instincts.
        "
        />

        <PartnerTattoos
          mainTitle="Navigating Tattoo Styles in 2023"
          content1=""
          content2="Ideas for Men in 2023: As we step into a new year, fresh tattoo trends emerge. Stay ahead of the curve with innovative ideas for men's tattoos in
        "
        tattooStyles={tattooStyles}
          partnerTattoo1={"/Symbol-Unity.png"}
          slide={"slide2"}
        />


<WhypartnerTattoos
          mainTitle="Visualizing Your Tattoo Experience"
          title1="Tattoo Styles Image Gallery"
          content1="To inspire your tattoo journey, explore our curated image gallery showcasing various tattoo styles. Explore miniature tattoo concepts for men, including eagle tattoos, geometric tattoos, and rose tattoos, each demonstrating creativity, audacity, complexity, and enduring sophistication.
        "
          title2="Connecting Through Body Art:"
          content2="Tattoos connect people, forming a shared language of expression. Join a community that celebrates the artistry of body ink. Share your tattoo journey, discover unique designs, and connect with fellow enthusiasts who appreciate the beauty of tattoo art.
        Tattoos have power. They mark moments, express emotions, and remind us of personal growth. Each tattoo tells a story.
        "
          embrace="Ready to Embrace"
          story="Your Love Story in Ink?"
          downloadApp="Download inckd now. Your perfect partner tattoo experience is just a click away!"
        />
     

        <TrendinginckdArtist
          title="Connecting with a Skilled "
          title_sub="Tattoo Artist:"
          content="Start your tattoo journey by finding the perfect artist. Look for skilled experts who understand your artistic vision. Work together on the design to make sure it reflects your story."
          button="Explore more artists"
        />

      


      </div>
    </>
  );
}