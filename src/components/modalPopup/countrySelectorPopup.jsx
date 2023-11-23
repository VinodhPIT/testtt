import React, { useState ,useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { blurDataURL } from "@/constants/constants";
import countriesData from "@/data/countries.json"
import styles from './style.module.css'
import { useRouter } from 'next/router'
import setLanguage from "next-translate/setLanguage";


const customStyles = {
  overlay: {
    backgroundColor: "rgba(6, 6, 6, 0.78)",
    zIndex: 1000,
  },
  content: {
    border: "none",
    background: "transparent",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0px",
    top: "0",
    bottom: "0px",
    right: "0px",
    left: "0px",
    overflow: "inherit",
    maxHeight: "inherit",
    borderRadius: "8px",
  },
};
const CountrySelectorModel = ({ isOpen, closeModal }) => {

  const router = useRouter()
  const [country, setCountry] = useState([])
  const[countryId,setCountryId]= useState(1)
  const[visible,setVisible]= useState(false)
  const[domain,setDomain]= useState('')
  const[lng,setlng]= useState('')

  useEffect(() => {
    setCountry(countriesData);
  }, []);


  const tets = (id  ,domain  ,li ) =>{

    setCountryId(id)

    setVisible(true)

    setDomain(domain)

    setlng(li)
    

  }
  

  const chooseLanguage = async () => {
    await setLanguage(`${domain}${"-"}${lng}`)
    closeModal()
   
  };



  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <div className="popup_wrap">
        <div className="popup_container">
        <button className="close_button" onClick={closeModal}>
            <img src="/popup-close.svg" alt="close"/>        
          </button>


          <div style={{ backgroundColor: "#fff", padding:"10px" }}>
            <h5>Choose your region and language</h5>
            <p>
              Get in touch with us lorem ipsum is a dummy content for
              typesetting industry.
            </p>

            {country.map((e) => {
              return (
                <button key={e.id} className={countryId===e.id ? styles.activeCountry :styles.inActivecountry } onClick={()=>tets(e.id  ,e.domain ,e.lng)}   >
                  <Image
                    alt={`${e.country}${"-"}${e.language}`}
                    src={e.image}
                    width={32}
                    height={32}
                    placeholder="blur"
                    loading="lazy"
                    blurDataURL={blurDataURL}
                  />
                  <h4>{e.country}</h4>
                  <p>{e.language}</p>
                </button>
              );
            })}






{visible&& <button onClick={()=>chooseLanguage()} style={{"background":"#000" ,"padding":"10px" ,"color":"#fff"}}>
  Select Language
</button>}

          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CountrySelectorModel;
