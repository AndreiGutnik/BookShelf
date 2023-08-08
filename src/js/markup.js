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
      ({ book_image, title, author, amazon_product_url }) =>
        `<li class="top-book-list-item">
      <a href="${amazon_product_url}" class="book-list-link" target="_blank">
      <div class="thumb"><img class="book-list-img" src="${book_image}" />
      </div>
      <p class="book-list-name">${title}</p>
      <p class="book-list-author">${author}</p>
      </a></li>`
    )
    .join('');
}
export function createMarkupBooks(arr) {
  return arr
    .map(
      ({ book_image, title, author, amazon_product_url }) =>
        `<li class="top-book-list-item card">
      <a href="${amazon_product_url}" class="book-list-link" target="_blank">
      <div class="thumb"><img class="book-list-img" src="${book_image}" />
      </div>
      <p class="book-list-name">${title}</p>
      <p class="book-list-author">${author}</p>
      </a></li>`
    )
    .join('');
}