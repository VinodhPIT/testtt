import React, {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";
import { fetchCategoryData, fetchMultiData, getStyles } from "@/action/action";
import { Parameters } from "@/components/parameters/params";
const initialState = {
  address: "Location",
  location:"",
  categoryCollection: [],
  currentTab: "",
  isTriggered: false,
  pageNo: 0,
  selectedStyle: "",
  styleCollection: [],
  totalItems: "",
  searchKey: "",
  value: "",
  hints: [],
  errorMessage: false,
  loading: false,
  latitude: "",
  longitude: "",
  searchData: [],
  toggle: false,
  locale: "EN",
  isLoad: false,
  seed: "",
  slugIds:""
};

const reducer = (state, action) => {
  let data,
    currentTab,
    totalItems,
    searchKey,
    selectedStyle,
    pageNo,
    lat,
    lon,
    locale,
    seed,slugIds

  switch (action.type) {
 

    case "GET_ADDRESS":
      return {
        ...state,
        address: action.payload,
        location:action.payload==="Location"?"":action.payload
      };

    case "GET_LOCALE":
      return {
        ...state,
        locale: action.payload.locale,
      };

    case "IS_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "INITIAL_SERVER_DATA":
      ({
        data,
        currentTab,
        pageNo,
        totalItems,
        searchKey,
        selectedStyle,
        lat,
        lon,
        locale,
        seed,slugIds
      } = action.payload);

      return {
        ...state,
        categoryCollection: data,
        currentTab,
        totalItems,
        searchKey,
        pageNo: 0,
        serverLoad: false,
        selectedStyle,
        latitude: lat,
        longitude: lon,
        locale,
        seed,
        loading:false,
        slugIds
      };

    case "COUNT":
      const pageNo = action.payload;
      return { ...state, pageNo };

    case "LOAD_MORE":
      return {
        ...state,
        categoryCollection:
          state.currentTab === "all"
            ? [...state.categoryCollection, ...action.payload.data]
            : [...state.categoryCollection, ...action.payload.rows.hits],
      };

    // case "GET_HINTS":
    //   return {
    //     ...state,
    //     hints:
    //       state.currentTab === "all" || state.currentTab === ""
    //         ? action.payload.data
    //         : action.payload.rows.hits,
    //     errorMessage: state.hints.length === 0 ? true : false,
    //   };

    // case "SEARCH_QUERY":
    //   return {
    //     ...state,
    //     searchKey: action.payload,
    //     loading: false,
    //   };

    // case "SEARCH_DATA":
    //   return {
    //     ...state,
    //     categoryCollection:
    //       state.currentTab === "all" || state.currentTab === ""
    //         ? action.payload.data
    //         : action.payload.rows.hits,
    //     totalItems:
    //       state.currentTab === "all" || state.currentTab === ""
    //         ? action.payload.data.totalCount
    //         : action.payload.rows.total.value,
    //     pageNo: 0,
    //   };

    case "STYLE_COLLECTION":
      return {
        ...state,
        styleCollection: action.payload,
        isLoad: false,
      };

    default:
      return state;
  }
};

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const styleIds = JSON.parse(localStorage.getItem("selectedStyleIds"));
    if (styleIds) {
      setSelectedIds(styleIds);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedStyleIds", JSON.stringify(selectedIds));
  }, [selectedIds]);


  



  const getAddress = async (payload) => {
    try {
      dispatch({ type: "GET_ADDRESS", payload: payload });
    } catch (error) {}
  };

  const getLocale = async (payload) => {
    try {
      dispatch({ type: "GET_LOCALE", payload: payload });
    } catch (error) {}
  };

  const getLoad = async () => {
    try {


      dispatch({ type: "IS_LOADING", payload: true });



      
    } catch (error) {}
  };

  const fetchServerlData = async (payload) => {
    try {
      dispatch({ type: "INITIAL_SERVER_DATA", payload: payload });
    } catch (error) {}
  };

  const loadMore = async () => {
    const updatedPageNo = state.pageNo + 1;
    dispatch({ type: "COUNT", payload: updatedPageNo });
    try {
      const requestData = {
        ...Parameters,
        category: state.currentTab,
        page_no: updatedPageNo,
        style: state.slugIds,
        search_key: state.searchKey,
        latitude: state.latitude,
        longitude: state.longitude,
        seed: state.seed,
      };
      let responseData;
      if (state.currentTab === "all") {
        responseData = await fetchMultiData(requestData);
      } else {
        responseData = await fetchCategoryData(requestData);
      }

      dispatch({ type: "LOAD_MORE", payload: responseData });
    } catch (error) {}
  };

  // const getHintsBySearch = async (payload) => {
  //   try {
  //     const requestData = {
  //       ...Parameters,
  //       category: state.currentTab,
  //       search_key: payload,
  //     };
  //     let responseData;
  //     if (state.currentTab === "all" || state.currentTab === "") {
  //       responseData = await fetchMultiData(requestData);
  //     } else {
  //       responseData = await fetchCategoryData(requestData);
  //     }
  //     dispatch({ type: "GET_HINTS", payload: responseData });
  //   } catch (error) {}
  // };

  // const searchData = async (payload, router, load) => {
  //   dispatch({ type: "IS_LOADING", payload: load });

  //   let url = `/search?term=${payload}&category=${state.currentTab}`;
  //   if (state.selectedStyle !== "") {
  //     url += `&style=${state.selectedStyle}`;
  //   }
  //   router.push(url);

  //   dispatch({ type: "SEARCH_QUERY", payload });
  //   try {
  //     const requestData = {
  //       ...Parameters,
  //       category: state.currentTab,
  //       search_key: payload,
  //     };

  //     let responseData;
  //     if (state.currentTab === "all" || state.currentTab == "") {
  //       responseData = await fetchMultiData(requestData);
  //     } else {
  //       responseData = await fetchCategoryData(requestData);
  //     }
  //     dispatch({ type: "SEARCH_DATA", payload: responseData });
  //   } catch (error) {}
  // };

  const styleCollection = async () => {
    try {
      let responseData = await getStyles();

    

      dispatch({ type: "STYLE_COLLECTION", payload: responseData.data});
    } catch (error) {}
  };

  return (
    <GlobalStateContext.Provider
      value={{
        state,
        fetchServerlData,
        loadMore,
        getLocale,
        styleCollection,
        getAddress,
        selectedIds,
        setSelectedIds,
        getLoad
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};