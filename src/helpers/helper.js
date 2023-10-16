export const prepareRequest = (parameters) => {
  const request = {
    sort: parameters.sort,
    page_no: "0",
    paginator_count: parameters.paginator_count,
    search_key: "",
  };

  return request;
};

export const searchParam = (parameters) => {
  const request = {
    sort: "newest",
    page_no: parameters.page_no,
    paginator_count: parameters.category === "all" ? 10 : 24,
    search_key: parameters.search_key,
  };
  if (parameters.latitude && parameters.category == "artist") {
    request.longitude = parameters.longitude;
    request.latitude = parameters.latitude;
  }
  if (parameters.style) {
    // Check if parameters.style is a string
    if (typeof parameters.style === "string") {
      // Split the string by commas and convert to an array
      request.style = parameters.style.split(',').map(item => item.trim());
    } else if (Array.isArray(parameters.style)) {
      // If parameters.style is already an array, use it as is
      request.style = parameters.style;
    } else {
      request.style = [];
    }
  } else {
    request.style = [];
  }
  return request;
};

export const addAdsToResults = async (results, isMobile) => {

  const totalCount = results.length;
  if (totalCount < 15) {
    return results;
  }

   if (
    isMobile === "iPad" ||
    isMobile === "UnknownTablet" ||
    isMobile === null
  ) {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
  }
  else{
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
  }

  if (isMobile === "iPad" ) {
    results.splice(17, 0, { _index: "ad", colspan: 2, add: 2 });
  }

 else if (isMobile === "UnknownTablet" ) {
    results.splice(18, 0, { _index: "ad", colspan: 2, add: 2 });
  }
  else if ( isMobile === null) {
    results.splice(12, 0, { _index: "ad", colspan: 2, add: 2 });
  } 
  else{
    results.splice(19, 0, { _index: "ad", colspan: 2, add: 2 });
  }

  results.splice(28, 0, { _index: "ad", colspan: 2, add: 3 }); 

 /*  if (isMobile === "iPad") {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
    results.splice(17, 0, { _index: "ad", colspan: 2, add: 2 });
    results.splice(28, 0, { _index: "ad", colspan: 2, add: 3 });
  } else if (isMobile === "UnknownTablet") {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
    results.splice(18, 0, { _index: "ad", colspan: 2, add: 2 });
    results.splice(28, 0, { _index: "ad", colspan: 2, add: 3 });
  } else if (isMobile === null) {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
    results.splice(15, 0, { _index: "ad", colspan: 2, add: 2 });
    results.splice(28, 0, { _index: "ad", colspan: 2, add: 3 });
  } else {
    results.splice(6, 0, { _index: "ad", colspan: 2, add: 1 });
    results.splice(19, 0, { _index: "ad", colspan: 2, add: 2 });
    results.splice(28, 0, { _index: "ad", colspan: 2, add: 3 });
  } */
  results.forEach((item) => {
    if (item._index !== "ad") {
      item.colspan = 1;
    }
  });

  return results;
};
