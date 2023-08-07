export function createMarkupByCategory(arr) {
  return arr
  .map(
    ({ list_name, book_image, title, author, amazon_product_url }) =>
      `<li class="book-list-item">
            <p class="book-list-category">${list_name}</p>
          <a href="${amazon_product_url}" class="book-list-link" target="_blank"
            ><img class="book-list-img" src="${book_image}" width="335" height="485";
             />
            <p class="book-list-name">${title}</p>
            <p class="book-list-author">${author}</p>
          </a>
        </li>`
  )
  .join('')
}
  export function createMarkupTop(arr) {
    return arr
      .map(({ books: [list_name] }) =>
        `<li class="book-list-item">
        <p class="book-list-category">${list_name.list_name}</p>
          <a href="${list_name.amazon_product_url}" class="book-list-link" target="_blank">
         <div class="thumb"><img class="book-list-img" src="${list_name.book_image}" /></div>   
            <p class="book-list-name">${list_name.title}</p>
            <p class="book-list-author">${list_name.author}</p>
          </a>
        </li>`
      )
      .join('');
  }
