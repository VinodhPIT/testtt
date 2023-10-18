
import React, { useEffect, useState } from "react";
import { useGlobalState } from "@/context/Context";
import styles from "./dropdown.module.css";
import { getUrl } from "@/utils/getUrl";
import Image from "next/image";
import { useToggle } from "@/hooks/useToggle";
export default function StyleDropdown({
  searchKey,
  currentTab,
  lat,
  lon,
  router,
  isDetail,
  onToggle,
}) {
  const { state, styleCollection ,getStyleCount} = useGlobalState();

  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    styleCollection();
    // Load selected IDs from localStorage when the component loads
    const savedIds = localStorage.getItem("selectedStyleIds");
    if (savedIds) {
      setSelectedIds(JSON.parse(savedIds));
    }
  }, []);

  useEffect(() => {
    // Save selected IDs to localStorage whenever the selectedIds state changes
    localStorage.setItem("selectedStyleIds", JSON.stringify(selectedIds));
    getStyleCount(selectedIds.length)
  }, [selectedIds]);

  const handleCheckboxChange = (elId) => {
    if (selectedIds.includes(elId)) {
      setSelectedIds(selectedIds.filter((id) => id !== elId));

       getStyleCount(selectedIds.length)
    } else {
      setSelectedIds([...selectedIds, elId]);
    
    }

  };

  const clearAll = async () => {
    setSelectedIds([]);
    localStorage.clear('selectedStyleIds')
  await  getUrl(searchKey, currentTab, '', lat, lon, router);

  };

  const onSearch = async () => {
    if (isDetail === true) {
     await getUrl(searchKey, currentTab, selectedIds, lat, lon, router);
    } else {
     await getUrl(searchKey, currentTab, selectedIds, lat, lon, router);
    }
    onToggle();
   
  };

  return (
    <div className={styles.custom_dropdown}>
      <h4>Style</h4>
      <div className={styles.custom_dropdown_close} onClick={() => onToggle()}>
        <Image src="/icon-close-drop.svg" width={24} height={24} alt="close" priority />
      </div>
      <div className={styles.custom_dropdown_content}>



{state.styleCollection.map((el) => {
          return (
            <div key={el._id} className={styles.custom_dropdown_col}>
              <label className={styles.custom_dropdown_label}   >
                <p>{el.sort[0]}</p>
                <div className={styles.custom_checkbox}>
                  <input
                    type="checkbox"
                    id={`checkbox_${el._id}`}
                    onChange={() => handleCheckboxChange(el._id)}
                    checked={selectedIds.includes(el._id)}
                     />
                </div>
              </label>
            </div>
          );
        })}. 

      </div>
      <div className={styles.custom_dropdown_btn}>
        <button
          disabled={selectedIds.length === 0}
          onClick={() => clearAll()}
          className="btn_outline_secondary w_100pc"
        >
          Clear All
        </button>
        <button
          disabled={selectedIds.length === 0}
          onClick={()=>onSearch()}
          className="btn_secondary w_100pc"
        >
          Show Results
        </button>
      </div>
    </div>
  );
}
