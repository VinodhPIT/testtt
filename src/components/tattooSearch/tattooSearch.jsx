
import React, { useState, useEffect, useRef } from "react";
import style from "./tattoosearch.module.css";
import { getUrl } from "@/utils/getUrl";
import { useGlobalState } from "@/context/Context";



function SearchBar({
  searchKey,
  currentTab,
  selectedStyle,
  router,
  isDetail
}) {
  const { state, searchData } = useGlobalState();
  const [searchState, setSearchState] = useState({
    query: "",
    showDropdown: false,
    searchHistory: [],
  });



  const inputRef = useRef(null);
  // const router = useRouter();

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => {
  //     document.removeEventListener("mousedown", handleOutsideClick);
  //   };
  // }, []);

  // useEffect(() => {
  //   const storedHistory = localStorage.getItem("searchHistory");
  //   if (storedHistory) {
  //     setSearchState((prevSearchState) => ({
  //       ...prevSearchState,
  //       searchHistory: JSON.parse(storedHistory),
  //     }));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "searchHistory",
  //     JSON.stringify(searchState.searchHistory)
  //   );
  // }, [searchState.searchHistory]);



useEffect(() => {
    const searchQuery = localStorage.getItem("searchQuery");
    if (searchQuery) {
      setSearchState((prevSearchState) => ({
        ...prevSearchState,
        query: JSON.parse(searchQuery),
      }));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "searchQuery",
      JSON.stringify(searchState.query)
    );
  }, [searchState.query]);

















  const hintsToDisplay = [];

  if (state.hints !== undefined) {
    state.hints.forEach((el) => {
      if (el._index === "artist") {
        const artist = el;
        artist._source.artist_name &&
        !hintsToDisplay.includes(artist._source.artist_name)
          ? hintsToDisplay.push(artist._source.artist_name)
          : null;
        artist._source.first_name &&
        !hintsToDisplay.includes(artist._source.first_name)
          ? hintsToDisplay.push(artist._source.first_name)
          : null;
        artist._source.last_name &&
        !hintsToDisplay.includes(artist._source.last_name)
          ? hintsToDisplay.push(artist._source.last_name)
          : null;
      } else if (el._index === "tattoo") {
        const tattoo = el;
        tattoo._source.name_suggest &&
          tattoo._source.name_suggest.forEach((nameSuggest) => {
            if (hintsToDisplay.includes(nameSuggest)) {
              return;
            }
            hintsToDisplay.push(nameSuggest);
          });
      }
    });
  }

  const handleChange = (e) => {
    setSearchState((prevSearchState) => ({
      ...prevSearchState,
      query: e,
    }));
    //getHintsBySearch(e, router);
  };

  const handleSubmit = async (e) => {


    e.preventDefault();
    if (isDetail === true) {
      const categoryMapping = {
        tattoo: "tattoos",
        flash: "flash-tattoos",
        artist: "tattoo-artists",
        all: "all",
      };
      const category = categoryMapping[currentTab] || null;

      router.push(`/explore/${category}/keyword/${searchState.query}`);
    } else {
      await getUrl(
        currentTab,
        searchState.query,
        selectedStyle,
        state.location,
        router,
      );
    }
    // addToSearchHistory(searchState.query);
  };

  // const handleOutsideClick = (e) => {
  //   if (inputRef.current && !inputRef.current.contains(e.target)) {
  //     setSearchState((prevSearchState) => ({
  //       ...prevSearchState,
  //       showDropdown: false,
  //     }));
  //   }
  // };

  // const handleItemClick = (item, e) => {
  //   e.preventDefault();

  //   setSearchState((prevSearchState) => ({
  //     ...prevSearchState,
  //     query: item,
  //     showDropdown: false,
  //   }));
  //   if (isPage) {
  //     router.push(`/search?term=${item}&category=${"all"}`);
  //   } else {
  //     searchData(item, router);
  //   }
  //   addToSearchHistory(item);
  // };




  // const addToSearchHistory = (name) => {
  //   const newItem = { id: uuidv4(), name };
  //   setSearchState((prevSearchState) => ({
  //     ...prevSearchState,
  //     searchHistory: [newItem, ...prevSearchState.searchHistory],
  //   }));
  // };







  // const clear = (el) => {
  //   const updatedHistory = searchState.searchHistory.filter(
  //     (item) => item.id !== el.id
  //   );
  //   setSearchState((prevSearchState) => ({
  //     ...prevSearchState,
  //     searchHistory: updatedHistory,
  //   }));
  //   localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  // };

  const clearText = async () => {
    if (searchKey === "") {
      setSearchState({ query: "" });
    } else {
      if (isDetail === true) {

        setSearchState({ query: "" });

      } else {
        await getUrl(currentTab ,"",  selectedStyle, state.location, router);
      }

      setSearchState({ query: "" });
    }
localStorage.clear('searchQuery')

  };

  return (
    <div className={style.search_bar} style={{ position: "relative" }}>
      <form onSubmit={handleSubmit}>
        <div className="input_group position_relative" ref={inputRef}>
          <input
            placeholder="Search"
            type="text"
            required="required"
            className={style.input_txt}
            onChange={(event) => handleChange(event.target.value)}
            onFocus={() =>
              setSearchState((prevSearchState) => ({
                ...prevSearchState,
                //  showDropdown: true,
              }))
            }
            value={searchState.query}
          />
          <button type="submit" tabindex="-1" className={style.btn_search}>
            <img src="/tattoo-magnifer.svg" alt="search" />
          </button>

          {searchState.showDropdown && (
            <div className={style.dropdown}>
              {hintsToDisplay.map((result, index) => (
                <li onClick={(e) => handleItemClick(result, e)} key={index}>
                  {result}
                </li>
              ))}

              {state.errorMessage && (
                <div>
                  <h4 className={style.search_title}>Results</h4>
                  <p>
                    We couldn&apos;t find any results for &lt;&lt;&lt;{" "}
                    {searchState.query} &gt;&gt;&gt;
                  </p>
                </div>
              )}
              {searchState.searchHistory.length > 0 && (
                <div>
                  <h4 className={style.search_title}>Latest Search</h4>
                  <div className={style.item_wrapper}>
                    {searchState.searchHistory.map((el) => (
                      <div
                        key={el.id}
                        onClick={() => clear(el)}
                        className={style.searched_items}
                      >
                        <div className={style.search_abel}>
                          <p className={style.trim}>{el.name}</p>
                        </div>

                        <div className={style.clearhistory}>x </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </form>
      {searchState.query && (
        <button className={style.close_search} onClick={() => clearText()}>
          <img
            src="/search-close.svg"
            alt="search close"
            className={style.close_search_icon}
          />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
