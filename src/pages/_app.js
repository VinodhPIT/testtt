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

const figtree = Figtree({
  style: ["normal"],
  weight: ["400", "700", "900", "600"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  function getHeaderComponent(pathname) {
    switch (pathname) {
      case "/":
      case "/klarna":
        return <Header logo={'/inckd-logo.svg'} theme={"normal"} isPosition={true} />;

      case "/search":
      case "/flash/[detail]":
      case "/artist/[detail]":
      case "/tattoo/[detail]":
      case "/flash/[detail]":
      case "/404":
        return (
          <CustomHeader
            logo={"/tattooSearch.svg"}
            theme={"white"}
            isPosition={false}
          />
        );

        case "/contactus":
         case "/joinartist":
          case "/dictionary":
      
          return <Header logo={'/inckd-logo.svg'} theme={"black"} isPosition={true} />;
        
  

      case "/faq":
        case "/privacypolicy":
        return (
          <Header
            logo={"/Inckd-logo-footer-black.svg"}
            theme={"white"}
            isPosition={false}
          />
        );

      case "/styleguide":
        return (
          <CustomHeader
            logo={"/styleGuideLogo.svg"}
            theme={"normal"}
            isPosition={true}
          />
        );

      case "/fortattooartists":
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
    <GlobalStateProvider>
      <div className={figtree.className}>
        {getHeaderComponent(router.pathname)}

        <UseLayout pathname={router.pathname}>
          <Component {...pageProps} />
        </UseLayout>

        <Footer />
      </div>
    </GlobalStateProvider>
  );
}

export default MyApp;