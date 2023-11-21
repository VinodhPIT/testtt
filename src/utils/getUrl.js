export const getUrl = (catgy, term, style, address, router) => {



  return new Promise((resolve, reject) => {
    const categoryMapping = {
      tattoo: "tattoos",
      flash: "flash-tattoos",
      artist: "tattoo-artists",
      all: "all",
    };
    const category = categoryMapping[catgy] || null;

 

    let url = `/explore/${category}/`;

    if (term !== "") {
      url += `keyword/${term}/`;
    }

    if (style !== "") {

      url += `style/${style}`;
    }
    if (category === "tattoo-artists" && address !== "") {
      url += `/location/${address}`;
    }


    router
      .push(url)
      .then(() => {
        resolve("Navigation succeeded");
      })
      .catch((err) => {
        reject(err);
      });
  });
};



