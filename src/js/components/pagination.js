import Pagination from 'tui-pagination';
import refs from '../refs';

const { paginationEl } = refs;

let visiblePages = 2;

if (window.innerWidth > 768) {
  visiblePages = 3;
};

const options = {
  totalItems: 10,
  itemsPerPage: 1,
  visiblePages: visiblePages,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<p class="tui-page-btn tui-is-selected">{{page}}</p>',
    moveButton: ({ type }) => {
      let template =
        '<a href="#" class="tui-page-btn tui-last custom-class-last">' +
        '<span class="tui-ico-last"><svg class="paginations__icon">' +
        '<use href="/icons.adfc4680.svg#icon-double-small-right"></use></svg></span>' +
        '</a>';

      if (type === 'next') {
        template =
          '<a href="#" class="tui-page-btn tui-next custom-class-next">' +
          '<span class="tui-ico-next"><svg class="paginations__icon">' +
          '<use href="/icons.adfc4680.svg#icon-small-right"></use></svg></span>' +
          '</a>';
      } else {
        if (type === 'first') {
          template =
            '<a href="#" class="tui-page-btn tui-first custom-class-first">' +
            '<span class="tui-ico-first"><svg class="paginations__icon">' +
            '<use href="/icons.adfc4680.svg#icon-double-small-left"></use></svg></span>' +
            '</a>';
        } else {
          if (type === 'prev') {
            template =
              '<a href="#" class="tui-page-btn tui-prev custom-class-prev">' +
              '<span class="tui-ico-prev"><svg class="paginations__icon">' +
              '<use href="/icons.adfc4680.svg#icon-small-left"></use></svg></span>' +
              '</a>';
          }
        }
      }
      return template;
    },
    disabledMoveButton: ({ type }) => {
      let template =
        '<span class="tui-page-btn tui-is-disabled tui-last custom-class-last">' +
        '<span class="tui-ico-last"><svg class="paginations__icon">' +
        '<use href="/icons.adfc4680.svg#icon-double-small-right"></use></svg></span>' +
        '</span>';

      if (type === 'next') {
        template =
          '<span class="tui-page-btn tui-is-disabled tui-next custom-class-next">' +
          '<span class="tui-ico-next"><svg class="paginations__icon">' +
          '<use href="/icons.adfc4680.svg#icon-small-right"></use></svg></span>' +
          '</span>';
      } else {
        if (type === 'first') {
          template =
            '<span class="tui-page-btn tui-is-disabled tui-first custom-class-first">' +
            '<span class="tui-ico-first"><svg class="paginations__icon">' +
            '<use href="/icons.adfc4680.svg#icon-double-small-left"></use></svg></span>' +
            '</span>';
        } else {
          if (type === 'prev') {
            template =
              '<span class="tui-page-btn tui-is-disabled tui-prev custom-class-prev">' +
              '<span class="tui-ico-prev"><svg class="paginations__icon">' +
              '<use href="/icons.adfc4680.svg#icon-small-left"></use></svg></span>' +
              '</span>';
          }
        }
      }
      return template;
    },
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};


// const instance = new Pagination(paginationEl, options);  создание пагинации
// instance.setTotalItems(5);   установить количество страниц
// instance.getCurrentPage();   получить текущую страницу