
export default function createCategoryList(arr) {
 
    return arr
        .sort((firstTitle, secondTitle) => 
            firstTitle.list_name.localeCompare(secondTitle.list_name))
        .map(({ list_name }) => {
            return `<li class="category__item">All categories</li>
            <li class="category__item">${list_name}
                </li>`})
            .join("");
    
}


        
 

