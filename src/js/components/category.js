import BooksService from "../BooksService";

const booksService = new BooksService();

const elements = {
    categoryListEl: document.querySelector(".category__list")
}

booksService.getCategoryList()
    .then(response => {
        return response;
        }
    )
    .then(data => elements.categoryListEl.innerHTML = createCategoryList(data))
    //не відловлює
    .catch (serviceError);


    //Функції

function createCategoryList(arr) {
    return arr.map(({ list_name }) =>
        ` <li class="category__item">${list_name}
            </li>`).join("");
    
}

//поки не працює((()))
function serviceError(err) { 
    Notify.failure('Oops!. Something wrong! Please try again later.', {
            position: 'top',
            timeout: 3000,
        })
}



