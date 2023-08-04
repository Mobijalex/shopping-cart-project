let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "M1",
    name: "casual shirt",
    price: 45,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
    img: "images/img-1.jpg",
  },
  {
    id: "M2",
    name: "office shirt",
    price: 100,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
    img: "images/img-2.jpg",
  },
  {
    id: "M3",
    name: "T shirt",
    price: 25,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
    img: "images/img-3.jpg",
  },
  {
    id: "M4",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing",
    img: "images/img-4.jpg",
  },
];

let basket = [];

// this function allows us to generate the cards from the given data from the arrey useing map function

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      console.log(id);
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
              <div id=${id} class="quantity">0</div>
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
  update(selectedItem.id);
};

// decrement function

let decrement = (item) => {
  let selectedItem = item;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  // console.log(basket);
  update(selectedItem.id);
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
};
