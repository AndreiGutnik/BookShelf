!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},e=t.parcelRequire0688;null==e&&((e=function(t){if(t in o)return o[t].exports;if(t in s){var e=s[t];delete s[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,o){s[t]=o},t.parcelRequire0688=e),e("8GIKD"),e("ch6IT"),e("etYyt"),e("1ShAv");const n=document.querySelector(".shopping-list-empty-page");if(localStorage.getItem("storage-data")){const l=localStorage.getItem("storage-data");let a=JSON.parse(l);const c=a.map((function(t){const{book_image:o,author:s,list_name:e,description:n,title:i,id:l,marketAmazon:a,marketAppleBooks:c,marketBookshop:r}=t,d=document.createElement("div");d.classList.add("shoplist-book-container"),d.dataset.id=l;const p=`<img src="${o}" class="shoplist-book-img">\n        <div class="shoplist-desc-container">\n          <h4 class="shoplist-book-title">${i}</h4>\n          <p class="shoplist-book-genre">${e}</p>\n          <p class="shoplist-book-description">${n}</p>\n           <p class="shoplist-book-author">${s}</p>\n        </div>\n        <div class="shoplist-icons">\n    <ul class="shoplist-icons-list">\n      <li class="shoplist-icons-li">\n        <a href="${a}" target="blank">\n          <div class="shoplist-icon-amazon"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="${c}" target="blank">\n          <div class="shoplist-icon-barnesAndNoble"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="${r}" target="blank">\n          <div class="shoplist-icon-bookshop"></div>\n        </a>\n      </li>\n    </ul>\n  </div>\n        <div class="shoplist-trash"></div>\n`;return d.innerHTML=p,d}));const r=document.createElement("div");r.classList.add("shopping-list-container"),c.forEach((t=>{r.appendChild(t)})),n.replaceWith(r);const d=document.querySelectorAll(".shoplist-trash");function i(t){const o=t.target.closest(".shoplist-book-container").dataset.id;a=a.filter((t=>t.id!==o)),localStorage.setItem("shoppingList",JSON.stringify(a)),r.removeChild(t.target.closest(".shoplist-book-container")),0===a.length&&r.replaceWith(n)}console.log(d),d.forEach((t=>{t.addEventListener("click",i)})),0===a.length&&(document.querySelector(".shopping-list-container")||document.body.appendChild(r),r.replaceWith(n));const p=document.querySelector(".pagination-container");p&&(0===a.length?p.classList.add("pagination-hidden"):p.classList.remove("pagination-hidden"))}e("2SYxc")}();
//# sourceMappingURL=shopping-list.eeed0b11.js.map
