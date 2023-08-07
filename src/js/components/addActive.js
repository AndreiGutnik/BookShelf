const categoryItems = document.querySelectorAll('.category_item')
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        const activeCategory = document.querySelector('.category_item.active')
        activeCategory.classList.remove('active');
        item.classList.add('active')
    })
})