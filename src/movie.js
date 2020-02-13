const input = document.querySelector("#keyword");
const list = document.querySelector("#results");

const displayMovies = (movies) => {
  movies.forEach((movie) => {
    list.insertAdjacentHTML("beforeend", `
      <li class='list-inline-item'>
        <img src="${movie.Poster}"/>
      </li>
    `);
  });
};

const fetchMovies = (keyword) => {
  const url = `http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data.Search[0].Title);
      // 3. Change the DOM
      displayMovies(data.Search);
    });
};

const updateMovieList = (event) => {
  // 2.5. Fetch the API
  event.preventDefault();
  list.innerHTML = "";
  fetchMovies(input.value);
};

export { fetchMovies, updateMovieList };
