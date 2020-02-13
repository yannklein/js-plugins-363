// imports from plugins
import { initSortable } from './plugins/initSortable';
import { initMarkdownit } from './plugins/initMarkdownit';
import { initSelect2 } from './plugins/initSelect2';

// local imports
import { fetchMovies, updateMovieList } from './movie';

// Elements selection
const button = document.querySelector("#submit");

// plugin calls
initSortable();
initMarkdownit();
initSelect2();

// local calls
fetchMovies("star wars");

// Event listeners
button.addEventListener("click", updateMovieList);
