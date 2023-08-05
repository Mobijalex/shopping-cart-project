let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

// this function allows us to generate the cards from the given data from the arrey useing map function

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];

      return `
    <div id = product-id-${id}class="item">
        <img width="220" src=${img} alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">${
        search.item === undefined ? 0 : search.item
      }</div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"> </i>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join(""));
};

generateShop();

// increment function and decrement function

let increment = (item) => {
  let selectedItem = item;

  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  // this is used for setting the item in to the local storage
  localStorage.setItem("data", JSON.stringify(basket));

  update(selectedItem.id);
};

// decrement function

let decrement = (item) => {
  let selectedItem = item;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);

  // this is used for setting the item in to the local storage
  localStorage.setItem("data", JSON.stringify(basket));
};

// updating the number from the increment and decrement in the card
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

// for updating the item number on the number on the basket
let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
