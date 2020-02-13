// const MarkdownIt = require('markdown-it');
import MarkdownIt from 'markdown-it';

const initMarkdownit = () => {
  const md = new MarkdownIt();
  const preview = document.querySelector("#preview");
  const editor = document.querySelector("#editor");

  editor.addEventListener("keyup", (event) => {
    preview.innerHTML = md.render(editor.value);
  });
};

export { initMarkdownit };
