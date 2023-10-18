import React, { useState } from "react";
import { getUrl } from "@/utils/getUrl";
import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import useWindowResize from "@/hooks/useWindowSize";
import styles from "../styleDropdown/dropdown.module.css";
import Image from "next/image";
import { useGlobalState } from "@/context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LocationSearch({
  searchKey,
  currentTab,
  selectedStyle,
  router,
  onToggle,
}) {
  const notify = () => {
    toast("Choose the location from the dropdown", {
      position: "top-center", // Set the position of the toast
      autoClose: 3000, // Auto-close the toast after 3000ms (3 seconds)
      type: "error",
    });
  };

  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const { isMobileView } = useWindowResize();
  const { getAddress } = useGlobalState();

  const handleSelect = async (value) => {
    getAddress(value);
    const result = await geocodeByAddress(value);
    const ll = await getLatLng(result[0]);
    setAddress(value);
    setCoordinates(ll);
  };

  const clear = async () => {
    setAddress("");
    await getUrl(searchKey, currentTab, selectedStyle, "", "", router);
  };

  const onError = (status, clearSuggestions) => {
    clearSuggestions();
  };

  const searchLocation = async () => {
    if (coordinates.lat === null) {
      notify();
    } else {
      await getUrl(
        searchKey,
        currentTab,
        selectedStyle,
        coordinates.lat,
        coordinates.lng,
        router
      );
      await getAddress("Location");
      onToggle();
    }
  };

  return (
    <div
      className={
        isMobileView ? styles.mobile_toggleBox : styles.desktop_toggleBox
      }
    >
      <div className={styles.custom_toggleBox}>
        <div className={styles.custom_toggle_title}>
          <h4>Search by Location</h4>
          {isMobileView && (
            <div
              onClick={() => onToggle()}
              className={styles.custom_toggle_close}
            >
              <Image
                src="/icon-close-drop.svg"
                width={24}
                height={24}
                alt="close"
              />
            </div>
          )}
        </div>

        <div className={styles.custom_toggle_content}>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
            onError={onError}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className={styles.custom_toggle_col}>
                <input
                  {...getInputProps({
                    placeholder: "Search Location",
                  })}
                  className={styles.location_search_input}
                />
                <div className={styles.autocomplete_dropdown_container}>
                  {loading && <div>Loading...</div>}
                  {suggestions.map((suggestion, index) => {
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
                    const style = suggestion.active
                      ? {
                          backgroundColor: "#eee",
                          padding: "13px",
                          cursor: "pointer",
                        }
                      : {
                          backgroundColor: "#fff",
                          padding: "13px",
                          cursor: "pointer",
                        };
                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, {
                          className,
                          style,
                        })}
                        key={suggestion.index}
                      >
                        <div>
                          <span>{suggestion.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>

        <div className={styles.custom_dropdown_btn}>
          <button
            onClick={() => clear()}
            disabled={address === ""}
            className="btn_outline_secondary w_100pc"
          >
            Clear All
          </button>

          <button
            onClick={() => searchLocation()}
            disabled={address === ""}
            className="btn_secondary w_100pc"
          >
            Show Results
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
