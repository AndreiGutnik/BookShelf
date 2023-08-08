import amazonPng from '../../images/png-icons/amazon-icon1x.png';
import amazonPng2x from '../../images/png-icons/amazon-icon2x.png';
import appleBookPng from '../../images/png-icons/applebook-icon1x.png';
import appleBookPng2x from '../../images/png-icons/applebook-icon2x.png';
import bookShopPng from '../../images/png-icons/bookshop-icon1x.png';
import bookShopPng2x from '../../images/png-icons/bookshop-icon2x.png';
import trush from '../../images/png-icons/trash-icon1x.png';
import trush2x from '../../images/png-icons/trash-icon2x.png';

const bookNone = document.querySelector('.shopping-none-div');
const bookCard = document.querySelector('.shopping-card');
const STORAGE_KEY = 'storage-data';

createMarkup();

function bookCheck() {
  const storageArr = JSON.parse(localStorage.setItem(STORAGE_KEY));

  if (!storageArr || storageArr.length === 0) {
    bookNone.style.display = 'block';
    bookCard.style.display = 'none';
    return;
  } else {
    bookNone.style.display = 'none';
    bookCard.style.display = 'block';
  }
}

function createMarkup(data) {
  const book_image = data.book_image;
  const title = data.title;
  const author = data.author;
  const marketAmazon = data.buy_links[0].url;
  const marketAppleBooks = data.buy_links[1].url;
  const marketBookshop = data.buy_links[4].url;
  const trushBtn = onStorageDelete;

  const htmlList = ` <li>
                <div class="book_card">
    <img src="${book_image}" alt="${title}" class="book_img"/>
<div>
<div class="title_delete_div">
<div class="title_div">
    <h2 class="book_title">${title}</h2>
    <p class="book_category">${list_name}</p>
         <button type="button" class="delete_btn">
          <img srcset="
          ${trush} 1x,
    ${trush2x} 2x" alt="" />
        </button>
    <p class="book_description">${description}</p>
        <div class="book_soc_div">
    <p class="book_author">${author}</p>
    <div>
   <ul>
   <li><a href="${marketAmazon}" target="_blank"
    > <img class"book_soc_amazon"
    srcset="
    ${amazonPng} 1x,
    ${amazonPng2x} 2x
  "
   src="${amazonPng}"
    alt="Amazon"
  /></a></li>
  <li><a href="${marketAppleBooks}" target="_blank"
    > <img class"book_soc"
    srcset="
    ${appleBookPng} 1x,
    ${appleBookPng2x} 2x
  "
   src="${appleBookPng}"
    alt="AppleBooks"
  /></a></li>
  <li ><a href="${marketBookshop}" target="_blank"
    > <img class"book_soc"
    srcset="
    ${bookShopPng} 1x,
    ${bookShopPng2x} 2x
  "
   src="${bookShopPng}"
    alt="Book-Shop"
  /></a></li>
</ul>
      </div>
    </div>
    </div>
    </div>
  </li>`;

  const html = `
         <ul class="container">
                ${htmlList}
            </ul>
        `;

  bookCard.innerHTML = html;
  trushBtn.addEventListener('click', onStorageDelete);
}

function onStorageDelete() {
  const idToDelete = storageObj.id;
  const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const indexToDelete = storageArr.findIndex(obj => obj.id === idToDelete);
  storageArr.splice(indexToDelete, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
  bookCheck();
}
