const mainData = () => {
  fetch("https://anime-629c2-default-rtdb.firebaseio.com/anime.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
        console.log(data)
    });
};

mainData();
