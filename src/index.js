// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  const price = product.querySelector('.price span');
  // console.log('price: ', price)
  const quantity = product.querySelector('.quantity input')
  // console.log('input quantity: ', quantity)

  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  
  const subtotal = priceValue * quantityValue;

  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2

  // //FIRST ATTEMPT
  // const products = document.getElementsByClassName('product');
  
  // for (let i = 0; i < products.length; i++) {
  //   updateSubtotal(products[i])
  // }

  // // ITERATION 3
  // //... your code goes here

  // let total = 0;
  // for (let i = 0; i < products.length; i++) {
  //   total += Number(products[i].querySelector('.subtotal span').innerHTML);
  // }

  // document.querySelector("h2 span").innerHTML = total;
  //END OF FIRST ATTEMPT

  const products = document.getElementsByClassName("product");
  let totalValue = 0;
  for (let i = 0; i < products.length; i++) {
    totalValue += updateSubtotal(products[i]);
  }
  console.log("total: ", totalValue);

  // ITERATION 3
  const total = document.querySelector("#total-value span");
  total.innerHTML = totalValue;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  product.parentNode.removeChild(product);
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(".create-product .name");
  const productPrice = document.querySelector(".create-product .price");

  const parent = document.querySelector("tbody");
  const newProduct = document.createElement("tr");
  newProduct.className = "product";
  newProduct.innerHTML = `<td class="name">
    <span>${productName.value}</span>
    </td>
    <td class="price">$<span>${productPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>`;
  parent.appendChild(newProduct);
  productName.value = "";
  productPrice.value = "";
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
