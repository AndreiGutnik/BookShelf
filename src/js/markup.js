
  function createMarkupTop(arr) {
    return arr
      .map(({ books: [list_name] }) =>
        `<li class="book-list-item">
          <a href="${list_name.amazon_product_url}" class="book-list-link" target="_blank">
            <img class="book-list-img" src="${list_name.book_image}" />
            <p class="book-list-name">${list_name.list_name}</p>
            <p class="book-list-author">${list_name.author}</p>
          </a>
        </li>`
      )
      .join('');
  }