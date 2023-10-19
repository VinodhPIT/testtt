

export const getUrl = (term, catgy, style, lat, lon, router) => {
  return new Promise((resolve, reject) => {
    let url = `/search?term=${term}&category=${catgy}`;

    if (style !== "") {
      url += `&style=${style}`;
    }

    if (catgy === "artist" && lat !== "") {
      url += `&lon=${lon}&lat=${lat}`;
    }

    router.push(url)
      .then(() => {
        resolve('Navigation succeeded');
      })
      .catch(err => {
        reject(err);
      });
  });
};

