import Sortable from 'sortablejs';

const initSortable = () => {
  const el = document.getElementById('results');
  Sortable.create(el, {
    ghostClass: "ghost",
    animation: 1500,
    // onEnd: (event) => {
    //   alert(`${event.oldIndex} moved to ${event.newIndex}`);
    // }
  });
};

export { initSortable };
