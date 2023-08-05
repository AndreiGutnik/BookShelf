import BooksService from "../BooksService";
import createCategoryList from "../markup";
import refs from "../refs"
import Notiflix from 'notiflix';

const { categoryListEl } = refs;

const booksService = new BooksService();

document.addEventListener("DOMContentLoaded", fetchCategoryList);

async function fetchCategoryList() { 
    try {
        const response = await booksService.getCategoryList();
        const categoryListMarkup = await createCategoryList(response);
        categoryListEl.insertAdjacentHTML("beforeend", categoryListMarkup);
        categoryListEl.firstElementChild.classList.add("active");
        
    } catch (error) {
    
         Notiflix.Notify.failure(`Sorry, ${error.message}`);
        
    }
   
}  


 
