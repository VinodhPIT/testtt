// import React from 'react'
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";

// export default function Faq() {
//   return (
//     <div>
      
//     </div>
//   )
// }





import React, { useState ,useEffect } from "react";
import Head from "next/head";

import useTranslation from "next-translate/useTranslation";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { useGlobalState } from "@/context/Context";
import { getLocaleProps } from '@/utils/getlocale';
import { useRouter } from "next/router";


export default function Faq({locale}) {
const router = useRouter()
  const {getLocale } = useGlobalState();
  const [state, setState] = useState("general");
  const changeTab = (id) => {
    setState(id);
  };

  const { t } = useTranslation();

  useEffect(() => {
    try {
      getLocale({
        locale,
      });
    } catch (error) {}
  }, [locale]);  

  const FAQ_GENERAL = [
    {
      id: 1,
      summary: t("common:faqScreen.title1"),
      details: t("common:faqScreen.content1"),
    },
    {
      id: 2,

      summary: t("common:faqScreen.title2"),
      details: t("common:faqScreen.content2"),
    },
    {
      id: 3,
      summary: t("common:faqScreen.title3"),
      details: t("common:faqScreen.content3"),
    },
    {
      id: 4,

      summary: t("common:faqScreen.title4"),
      details: t("common:faqScreen.content4"),
    },
  ];



  return (

    <div className="faq_wrap" >
      <div className="container">
        <h2>Frequently asked questions</h2>
      </div>
      <div className="faq_accordion_wrap">
        <div className="container">
          {state === "general" ? (
            <Accordion>
              {FAQ_GENERAL.map((e) => {
                return (
                  <>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {e.summary}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{e.details}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </>
                );
              })}
            </Accordion>
          ) : state == "artist" ? (
            <Accordion>
              {FAQ_ARTISTS.map((e) => {
                return (
                  <>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {e.summary}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{e.details}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </>
                );
              })}
            </Accordion>
          ) : (
            <Accordion>
              {FAQ_CUSTOMERS.map((e) => {
                return (
                  <>
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {e.summary}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{e.details}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </>
                );
              })}
            </Accordion>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { props } = await getLocaleProps(context);
  return {
    props:{
      locale:props.locale
    }
  };
}













