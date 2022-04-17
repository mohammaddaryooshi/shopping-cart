import {productsData} from "./products.js";

const productsContainer = document.querySelector(".products-bottom");

class UI {
  displayProducts(products){
   let result = "";

    products.forEach(product => {
        result+=`
        <div class="card">
        <div class="card-top">
            <img class="card-img" src="${product.imageUrl}">
        </div>
        <div class="card-bottom">
            <span class="product-title">${product.title}</span>
            <div class="addtocart-container">
                <span class="product-price">${product.price} $</span>
                <button data-id="${product.id}" class="addtocart-btn">addTocart</button>
            </div>
           
        </div>
    </div>
        `;
    });

    productsContainer.innerHTML = result;
  }
}

class Storage{

}

class Product {
    getProduct(){
     return productsData;
    }
}


document.addEventListener("DOMContentLoaded",()=>{
    const product = new Product();
    const Products = product.getProduct();
    const ui = new UI();
    ui.displayProducts(Products);
})