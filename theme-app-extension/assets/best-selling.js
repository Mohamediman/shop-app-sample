const bestSellerButton = document.querySelector('.bestSellerButton');
const bestSellerContainer = document.querySelector('.best-selling');

bestSellerButton.addEventListener('click', () => {
    bestSellerContainer.classList.toggle('hide');
});
 
const url = 

fetch(`https://8a33-2001-56a-f88e-3600-81ea-c8e8-2bd6-1b94.ngrok.io/api/products?shop=customcleantheme.myshopify.com`)
.then((res) => res.json())
        .then((data) => {
        console.log(url)
        console.log(data);
}).catch(error => console.log(error.message));
