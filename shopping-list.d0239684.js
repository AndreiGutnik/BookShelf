var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},s=e.parcelRequire0688;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in o){var s=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,s.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequire0688=s),s("3rDVG"),s("jF6U5"),s("2atFa"),s("8f4gI");const n="storage-data",i=document.querySelector(".shopping-list-empty-page");if(localStorage.getItem(n)){const a=localStorage.getItem(n);let r=JSON.parse(a);const c=r.map((function(e){const{book_image:t,author:o,list_name:s,description:n,title:i,id:l,marketAmazon:a,marketAppleBooks:r,marketBookshop:c}=e,d=document.createElement("div");d.classList.add("shoplist-book-container"),d.dataset.id=l;const p=`<img src="${t}" class="shoplist-book-img">\n        <div class="shoplist-desc-container">\n          <h4 class="shoplist-book-title">${i}</h4>\n          <p class="shoplist-book-genre">${s}</p>\n          <p class="shoplist-book-description">${n}</p>\n           <p class="shoplist-book-author">${o}</p>\n        </div>\n        <div class="shoplist-icons">\n    <ul class="shoplist-icons-list">\n      <li class="shoplist-icons-li">\n        <a href="${a}" target="blank">\n          <div class="shoplist-icon-amazon"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="${r}" target="blank">\n          <div class="shoplist-icon-barnesAndNoble"></div>\n        </a>\n      </li>\n      <li class="shoplist-icons-li">\n        <a href="${c}" target="blank">\n          <div class="shoplist-icon-bookshop"></div>\n        </a>\n      </li>\n    </ul>\n  </div>\n        <div class="shoplist-trash"></div>\n`;return d.innerHTML=p,d}));const d=document.createElement("div");d.classList.add("shopping-list-container"),c.forEach((e=>{d.appendChild(e)})),i.replaceWith(d);function l(e){const t=e.target.closest(".shoplist-book-container").dataset.id;r=r.filter((e=>e.id!==t)),localStorage.setItem(n,JSON.stringify(r)),d.removeChild(e.target.closest(".shoplist-book-container")),0===r.length&&d.replaceWith(i)}document.querySelectorAll(".shoplist-trash").forEach((e=>{e.addEventListener("click",l)})),0===r.length&&(document.querySelector(".shopping-list-container")||document.body.appendChild(d),d.replaceWith(i));const p=document.querySelector(".pagination-container");p&&(0===r.length?p.classList.add("pagination-hidden"):p.classList.remove("pagination-hidden"))}JSON.parse(localStorage.getItem(n)).length;s("kKdoG");
//# sourceMappingURL=shopping-list.d0239684.js.map
