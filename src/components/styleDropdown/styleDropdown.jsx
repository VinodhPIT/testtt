import React, { useEffect, useState } from "react";
import { useGlobalState } from "@/context/Context";
import styles from "./dropdown.module.css";
import { getUrl } from "@/utils/getUrl";
import Image from "next/image";
import { useToggle } from "@/hooks/useToggle";
export default function StyleDropdown({
  searchKey,
  currentTab,
  router,
  isDetail,
  onToggle,
}) {
  const { state, styleCollection, selectedIds, setSelectedIds } =
    useGlobalState();

  const handleCheckboxChange = (elId) => {
    if (selectedIds.includes(elId)) {
      setSelectedIds(selectedIds.filter((id) => id !== elId));
    } else {
      setSelectedIds([...selectedIds, elId]);
    }
  };

  const clearAll = async () => {
    setSelectedIds([]);
    localStorage.clear("selectedStyleIds");
    await getUrl(currentTab, searchKey, "", state.location, router);
  };

  const onSearch = async () => {
    await getUrl(currentTab, searchKey, selectedIds.length===0 ? "":selectedIds ,state.location, router);
  };







  return (
    <div className={styles.custom_dropdown}>
      <h4>Style</h4>
      <div className={styles.custom_dropdown_close} onClick={() => onToggle()}>
        <Image
          src="/icon-close-drop.svg"
          width={24}
          height={24}
          alt="close"
          priority
        />
      </div>
      <div className={styles.custom_dropdown_content}>
        {state.styleCollection.map((el) => {
          return (
            <div key={el.slug} className={styles.custom_dropdown_col}>
              <label className={styles.custom_dropdown_label}>
                <p>{el.name}</p>
                <div className={styles.custom_checkbox}>
                  <input
                    type="checkbox"
                    id={`checkbox_${el.slug}`}
                    onChange={() => handleCheckboxChange(el.slug)}
                    checked={selectedIds.includes(el.slug)}
                  />
                </div>
              </label>
            </div>
          );
        })}
        .
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
        
          onClick={() => onSearch()}
          className="btn_secondary w_100pc"
        >
          Show Results
        </button>
      </div>
    </div>
  );
}
