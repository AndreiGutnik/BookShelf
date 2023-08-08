export function createCategoryList(arr) {
  return arr
      .sort((firstTitle, secondTitle) =>
          firstTitle.list_name.localeCompare(secondTitle.list_name))
      .map(({ list_name }) => {
          return `
          <li class="category__item">${list_name}
              </li>`})
          .join("");
}

export function createMarkupByCategory(arr) {
  return arr
    .map(
      ({ list_name }) =>
        `<p class="book-list-category">${list_name}</p><ul class="top-books-list">` +
        createMarkupTop(arr.find(elem => elem.list_name === list_name)) +
        `</ul>` +
        `<button class="load-more" data-category="${list_name}">See More</button>`
    )
    .join('');
}
function createMarkupTop(arr) {
  return arr.books
    .map(
      ({ _id, book_image, title, author }) =>
        `<li class="top-book-list-item">
        <div class="wrap">
      <div class="thumb" data-bookid ="${_id}"><img class="book-list-img" src="${book_image}" /></div>
      <p class="book-list-name">${title}</p>
      <p class="book-list-author">${author}</p>
      </div>
      </li>`
    )
    .join('');
}
export function createMarkupBooks(arr) {
  return arr
    .map(
      ({ _id, book_image, title, author }) =>
        `<li class="top-book-list-item card">
        <div class="wrap">
      <div class="thumb" data-bookid = "${_id}"><img class="book-list-img" src="${book_image}" /></div>
      <div><p class="book-list-name">${title}</p>
      <p class="book-list-author">${author}</p></div></div>
      </li>`
    )
    .join('');
}
