let count=0;

const cartBtn =document.querySelector(".cart-btn");
const cartCount =document.getElementById("cartCount");

cartBtn.addEventListener("click" , () => {
    count++;
    cartCount.textContent = count;
});