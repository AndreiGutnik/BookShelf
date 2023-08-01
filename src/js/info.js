// Розмітку робимо у файлах.html, які створюємо в папці partials та підключаємо в index.html так:
// <include src="./partials/ім'я файлу.html"></include>

// До своєї розмітки створюємо окремий файл стилів з ім'ям, як відповідний файл .html (з нижнім підкреслюванням), та підключаємо в файлі index.scss так:
// @import './ім'я(без розширення)';
// Змінні css будуть знаходитись в файлі vars.scss


// ФАЙЛИ JS:
// index.js - основний файл
// refs.js - об'єкт з посиланнями на DON
// markup.js - файл з функціями для створення розмітки
// BooksService.js - клас для роботи з API
// LoadMoreBtn.js - клас для роботи з кнопкою LoadMore


//--------------------- РОБОТА З КЛАСОМ BooksService -----------------------------------

// const booksService = new BooksService();

// Вивід списку категорій
// booksService.getCategoryList().then(console.log);

// Вивід топ книг
// booksService.getTopBooks().then(console.log);

// Вивід книг по категорії
// booksService.selectedCategory = 'Hardcover Fiction';
// booksService.getBooksByCategory().then(console.log);

// Вивід книги по id
// booksService.bookId = '643282b1e85766588626a0a0';
// booksService.getBooksById().then(console.log);



//--------------------- РОБОТА З КЛАСОМ LoadMoreBtn -----------------------------------

// Цей клас викоростовуємо Для роботи з кнопкою LoadMore, в html для кнопки треба задати класи .load-more та is-hidden (за замовчуванням кнопка скрита, тобто має властивість isHidden: true)

// const loadMoreBtn = new LoadMoreBtn({
//   selector: '.load-more',
//   isHidden: true,
// });

// Сховати
// loadMoreBtn.hide()

// Показати
// loadMoreBtn.show()

// Зробити активною з текстом Load more
// loadMoreBtn.enable()

// Зробити неактивною з текстом Loading...
// loadMoreBtn.disable()
