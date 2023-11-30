import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SideDrawer from "@/components/sideDrawer/sideDrawer";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import { useModal } from "@/utils/modalUtils";
import CountryPickerModel from "@/components/modalPopup/countrySelectorPopup";


export default function Header({ logo, theme, isPosition }) {
 
const router = useRouter()
  const { t } = useTranslation();

  const { isPopupOpen, openPopup, closePopup } = useModal();

  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) {
      document.body.classList.add("nav_open");
    } else {
      document.body.classList.remove("nav_open");
    }
    return () => {
      document.body.classList.remove("nav_open");
    };
  }, [toggle]);

  const onToggle = () => {
    setToggle(true);
  };

  const onCloseToggle = () => {
    setToggle(false);
  };






  const links = [


    {
      id: 1,
      title:t("common:menus.tattooSearch"),
      url:`/${router.locale}/explore/tattoos`
    },
    {
      id: 2,
      title:t("common:menus.styleGuide"),
      url:`/${router.locale}/tattoo-styleguide`,
    },
    {
      id: 3,
      title:t("common:menus.dictionary"),
      url: `/${router.locale}/tattoo-dictionary`,
    },

    {
      id: 4,
      title:t("common:menus.klarna"),
      url: `/${router.locale}/klarna`,
    },




  ];
  let linkComponent;

  switch (router.locale) {
    case "uk-en":
    case "de-de":
      linkComponent = (
        <Link
          href={"/journal"}
          className={
            theme === "black"
              ? "textWhite"
              : theme === "normal"
              ? "textWhite"
              : "textBlack"
          }
        >
          {t("common:menus.journal")}
        </Link>
      );
      break;
    default:
      linkComponent = null;
      break;
  }


  return (
    <>
      <header className={isPosition === true ? "header_wrapper" : null}>
        <div>
          <div className="container">
            <nav className="header_navigation">
              <div className="header_logo">
                <Link href={"/"} className="navbar_brand">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={109}
                    height={52}
                    priority
                    className="searchLogo"
                  />
                </Link>
              </div>



              <div className="nav_block">
                <ul className="nav main_nav navbar_collapse collapse">
                  {links.map((link) => (
                    <li key={link.id} className="nav_item">
                      <Link
                        href={link.url}
                        className={
                          theme === "black"  ? "textWhite" :  theme === "normal" ? "textWhite" :  "textBlack"
                        }
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}

<li>{linkComponent}</li>
                </ul>
              </div>

              <div className="header_right">
                <button
                  type="button"
                  onClick={() => router.push(`/${router.locale}/for-tattoo-artists`)}
                  className={`btn btn_tattoo_art ${
                    theme === "black" ? "bgWhite" : "bgBlack"
                  }`}
                >
                   {t("common:menus.forTattooArtists")}
                </button>
                

                  
                <button className="language_switcher"                  
                    onClick={openPopup}
                  >
                    <Image 
                      src={'/united-kingdom.svg'}
                      alt="countries"
                      width={32}
                      height={32}
                      priority
                    />                   
                     English
                  </button>

                <Image
                    className="nav_btn_toggle"
                  onClick={() => onToggle(true)}
                  src={
                    theme === "white"
                      ? "/blackHamburger.svg"
                      : "/Hamburger Menu.png"
                  }
                  alt="hamburger"
                  width={32}
                  height={32}
                  priority
                />
              </div>
            </nav>
          </div>
        </div>
      </header>

      <CountryPickerModel
        className="custom-modal"
        isOpen={isPopupOpen}
        closeModal={closePopup}
      />


      {toggle === true ? <SideDrawer onCloseToggle={onCloseToggle} /> : null}
    </>
  );
}
