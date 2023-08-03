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

// this function allows us to generate the cards from the given data from the arrey useing map function

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      return `
    <div id = product-id-${id}class="item">
        <img width="220" src=${img} alt="" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="decremen()" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">0</div>
              <i onclick="increment()" class="bi bi-plus-lg"> </i>
            </div>
          </div>
        </div>
      </div>`;
    })
    .join(""));
};

generateShop();

// increment function and decrement function

let increment = () => {};
let decrement = () => {};
let update = () => {};
