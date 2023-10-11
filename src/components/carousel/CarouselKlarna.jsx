import React from "react";
import useTranslation from "next-translate/useTranslation";


import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselKlarna = ({ items }) => {
  const { t } = useTranslation();

  return (
    <Carousel
      showArrows={true}
      preventMovementUntilSwipeScrollTolerance={true}
      swipeScrollTolerance={50}
      renderArrowPrev={(onClickHandler, hasPrev) => (
        <button
          type="button"
          disabled={!hasPrev?true:false}
          className={hasPrev?"custom-carousel-arrow custom-carousel-prev ":"custom-carousel-arrow-disable custom-carousel-prev "}
          onClick={onClickHandler}
        >
          <img src="/Alt Arrow Left.svg" alt="Left Arrow" />
        </button>
      )}
      renderArrowNext={(onClickHandler, hasNext) => (
        <button
          type="button"
          disabled={!hasNext?true:false}
          className={hasNext?"custom-carousel-arrow custom-carousel-next":"custom-carousel-arrow-disable custom-carousel-next"}
          onClick={onClickHandler}
        >
      
          <img src="/Alt Arrow Right.svg" alt="Right Arrow" />
        </button>
      )}
    >
      {items.map((item, index) =>
        item.image ? (
          <div key={index} className="custom_carousel_slider">
            <div className="custom_option_block">
              <span className="custom_option_item">{item.option1}</span>
            </div>
            <div className="custom_carousel_slider_item">
              <img
                className="align-self-center w_auto hidden"
                src={item.image}
                alt={`Slide ${index}`}
              />
              <h2 className='title_pay_later'>{item.heading}</h2>
            </div>
            <p className="custom_carousel_data">{item.text}</p>
          </div>
        ) : (
          <div className="download_app" key={index}>
        <h2 className='m_text_center'> <span>{t("common:download-app-forMore")}</span> 
        
        <span className="textBlock">{t("common:download-app-forMore-sub")}</span></h2>
            

            <span className="download_app_img" style={{paddingTop:"50px"}}>
              <a href="" className="list_inline_item">
                <img src="./app-store.svg" alt="" className="w_auto" />
              </a>{" "}
              <a href="" className="list_inline_item">
                <img src="./g-play.svg" alt="" className="w_auto" />
              </a>
            </span>
            <p className="custom_carousel_data">{t("common:appContent")}</p>
          </div>
        )
      )}
    </Carousel>
  );
};

export default CarouselKlarna;
