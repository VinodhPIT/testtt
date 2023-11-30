

import {useEffect} from 'react'
import { useRouter } from "next/router";
import Header from "@/components/header/header";
import CustomHeader from "@/components/customHeader2/header"
import Footer from "@/components/footer/footer";
import { GlobalStateProvider } from "@/context/Context";
import { Figtree } from "next/font/google";
import UseLayout from "@/hooks/useLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/customStyles.css";
import loadGoogleMapsAPI from '@/components/google-maps'; 
import NProgress from  "nprogress"
NProgress.configure({ showSpinner: false });

const figtree = Figtree({
  style: ["normal"],
  weight: ["400", "700", "900", "600"],
  subsets: ["latin"],
});



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    loadGoogleMapsAPI();
  }, []);
  

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {

      NProgress.start();

    });

    router.events.on("routeChangeComplete", (url) => {
  
      NProgress.done();

    });
    return () => {
      router.events.off("routeChangeStart", (url) => {
      
      });

      router.events.off("routeChangeComplete", (url) => {
       
      });
    };
  }, []);







  function getHeaderComponent(pathname) {
    switch (pathname) {
      case "/":
      case "/klarna":
        return <Header logo={'/inckd-logo.svg'} theme={"normal"} isPosition={true} />;

      case "/explore/[[...slug]]":
      case "/artists/[detail]":
      case "/explore/tattoos/[detail]":
      case "/explore/flash-tattoos/[detail]":
      case "/404":
        
       
        return (
          <CustomHeader
            logo={"/tattooSearch.svg"}
            theme={"white"}
            isPosition={false}
          />
        );

        case "/contact":
         case "/join-tattoo-artists":
          case "/tattoo-dictionary":
            case "/journal":
      
          return <Header logo={'/inckd-logo.svg'} theme={"black"} isPosition={true} />;
        
  

      case "/faq":
        case "/privacy-policy":
          
          case "/listingDetail/[detail]":
        return (
          <Header
            logo={"/Inckd-logo-footer-black.svg"}
            theme={"white"}
            isPosition={false}
          />
        );

      case "/tattoo-styleguide":
        return (
          <CustomHeader
            logo={"/styleGuideLogo.svg"}
            theme={"normal"}
            isPosition={true}
          />
        );

      case "/for-tattoo-artists":
       
        return (
          <CustomHeader
            logo={"/artistHeaderLogo.svg"}
            theme={"normal"}
            isPosition={true}
          />
        );
      default:
        return null;
    }
  }

  return (
   <>

    <GlobalStateProvider>
      <div className={figtree.className}>
        {getHeaderComponent(router.pathname)}

        <UseLayout pathname={router.pathname}>
          <Component {...pageProps} />
        </UseLayout>

        <Footer />
      </div>
    </GlobalStateProvider>

    </>

  );
}

export default MyApp;