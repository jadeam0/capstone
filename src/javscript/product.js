//making an array of objects with our products
const products = [
    {
        id: 1,
        image: "https://i.postimg.cc/Hk0gTYxz/acer-swift-5-core-i7-main.jpg",
        name: "Acer Swift 5 Core",
        desc: "Intel Core i5 1135G7 Processor, 3 Year Warranty (Upon Registration, Windows 10 Pro",
        price: 24999,
        category: "Laptops",
        quantity: 5,
    },
    {
        id: 2,
        image: "https://i.postimg.cc/PJckM266/acer-chromebook-spin-713-core-i5-Main.jpg",
        name: "Acer Chromebook Spin 713 Core i5",
        desc: "Intel Core i5-1135G7,  8GB LPDDR4X, 256GB NVME SSD",
        price: 19019,
        category: "Laptops",
        quantity:5
    },
    {
        id: 3,
        image: "https://i.postimg.cc/pLjPsMMK/Apple-Mac-Book-Pro-16-Space-grey-Main.jpg",
        name: "Apple MacBook Pro 16",
        desc: "1 TB, Apple M1 Pro, macOS 12.0, Monterey, 16 GB RAM",
        price: 50162,
        category: "Laptops",
        quantity:4,
    },
    {
        id: 4,
        image: "https://i.postimg.cc/50sJXx8W/ASUS-Expert-Book-B7-flip-Main.jpg",
        name: "Asus ExpertBook Essential",
        desc: "Core i7-1165G7, 8GB DDR4 (OB), 512GB NVME SSD",
        price: 17499,
        category: "Laptops",
        quantity:3,
    },
    {
        id: 5,
        image: "https://i.postimg.cc/QNnssdXp/ASUS-Vivo-Book-Pro-16x-main.jpg",
        name: "ASUS Vivobook Pro 16X Laptop ",
        desc: "16GB, 1TB SSD, Intel® Core™ i7-11370H, Windows® 11 Home",
        price: 30000,
        category: "Laptops",
        quantity:4,
    },
    {
        id: 6,
        image: "https://i.postimg.cc/2yLtCmww/A03P1.jpg",
        name: "Samsung Galaxy A03",
        desc: "8.0 MP, 2GB RAM + 32GB ROM, microSDXC",
        price: 2499.00,
        category: "Cellphones",
        quantity :4,
    },
    {
        id: 7,
        image: "https://i.postimg.cc/GmFZBL1g/I11P1.jpg",
        name: "iPhone 11",
        desc: "64GB,  6.1 inch, True Tone display",
        price: 899.00,
        category: "Cellphones",
        quantity :5,
    },
    {
        id: 8,
        image: "https://i.postimg.cc/sftj7gt3/I14proP1.jpg",
        name: "Apple iPhone 14 Plus",
        desc: "256 GB, 12.0 MP, Hexa Core",
        price: 18303.89,
        category: "Cellphones",
        quantity :1,
    },
    {
        id: 9,
        image: "https://i.postimg.cc/6pKBb1WS/C20P1.jpg",
        name: "Nokia C20 Plus",
        desc: "3 GB RAM, Wireless, Android 11 (Go edition), ",
        price: 45,
        category: "Cellphones",
        quantity: 7,
    },
    {
        id: 10,
        image: "https://i.postimg.cc/rmPb6zSs/OP9P1.jpg",
        name: "OnePlus 9 Pro 5G LE2121",
        desc: "Dual SIM, 256 GB Storage, 8.0 MP, 50.0 MP, 16.0 MP, 48.0 MP, 2.0 MP",
        price: 45,
        category: "Cellphones",
        quantity: 8,
    },
    {
        id: 11,
        image:"https://i.postimg.cc/RV7BtQ7T/gaming-Monitor.jpg",
        name: "MSI Optix MAG342CQR 1500R",
        desc: "144Hz Refresh Rate, 1ms response time Mystic Light, UWQHD High Resolution",
        price: 12000.00,
        category: "Accessories",
        quantity:8,
    },
    {
        id: 12,
        image:"https://i.postimg.cc/W3qR1Mpg/keyboard-1.jpg",
        name: "Corsair 4-in-1",
        desc: "Five RGB Lighting Zone, IP42 Protection, iCUE Compatible",
        price: 750,
        category: "Accessories",
        quantity: 8,
    },
    {
        id: 13,
        image:"https://i.postimg.cc/FKR5wM2P/mouse-1.jpg",
        name: "Corsair HARPOON RGB PRO FPS/MOBA Gaming Mouse",
        desc: "Wired, Black, Red",
        price: 600,
        category: "Accessories",
        quantity: 2,
    },
    {
        id: 14,
        image:"https://i.postimg.cc/Vsb1fc5p/cpu-cooler.jpg",
        name: "ASUS TUF GAMING LC 120 RGB Cooler",
        desc: "120mm Cooler, RGB Fans, Compatible With Intel AND AMD CPU",
        price: 1600,
        category: "Accessories",
        quantity:4,
    },
    {
        id: 15,
        image:"https://i.postimg.cc/x19S3JgV/headset-1.jpg",
        name: "CORSAIR HS55 Stereo Gaming Headset",
        desc: "3.5mm Jack",
        price: 1900,
        category: "Accessories",
        quantity:9,
    },
];
// end of the array of object
// creating a function to display our objects
function productsDisplay() {
    // we target the products section so that every that we add falls underneath the products section
    // const ourProducts = document.getElementById("products");
    //loop through products to display them individually
    // Now we targetting Laptops
   
   
    products.forEach((product) => {
        // using if statements
        if (product.category == "Laptops") {
            const ourLaptops = document.getElementById("laptops")
            const elementProduct = document.createElement("div")
            elementProduct.innerHTML = `
            <div class="product-card col ">
            <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <p>R ${product.price}</p>
            <button onclick="cartPush(${product.id})" >Add to Cart</button>
            </div>
            `;
            ourLaptops.appendChild(elementProduct);
        }
    })

    // Cellphones
    products.forEach((product) => {
        // using if statements
        if (product.category == "Cellphones") {
            const ourCellphones = document.getElementById("cellphones")
            const elementProduct = document.createElement("div")
            elementProduct.innerHTML = `
            <div class="product-card col ">
            <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <p>R ${product.price}</p>
            <button onclick="cartPush(${product.id})" >Add to Cart</button>
            </div>
            `;
            ourCellphones.appendChild(elementProduct);
        }
    })

    // Accessories
    products.forEach((product) => {
        // using if statements
        if (product.category == "Accessories") {
            const ourAccessories = document.getElementById("accessories")
            const elementProduct = document.createElement("div")
            elementProduct.innerHTML = `
            <div class="product-card col ">
            <img src="${product.image}" alt="${product.name}" class="img-thumbnail">
            <h3>${product.name}</h3>
            <p>${product.desc}</p>
            <p>R ${product.price}</p>
            <button onclick="cartPush(${product.id})" >Add to Cart</button>
            </div>
            `;
            ourAccessories.appendChild(elementProduct);
            // ourAccessories.push(cart);
            // elementProduct.push(cart);
        }
    })
}


const cart = []

function cartPush(productId) {
    const product = products.find((product) => product.id === productId);
  
    if (product && product.quantity > 0) {
      cart.push(product);
      product.quantity--;
     
      cartUpdate();
      console.log(cart);
    }

    
}



// cartDel();
function cartUpdate(){
    const cartContent = document.getElementById('cartContent');
    cartContent.innerHTML = "";
        cart.forEach((product, index) => {
        const cartItem = document.createElement("div")
        cartItem.innerHTML = `
        <img src="${product.image}" alt="product image" class="img-thumbnail" />
        <p>${product.name} </p>
        <div class="d-flex justify-content-between">
          <p>R${product.price}</p>
          <button class="modalButtonClose" onclick="cartDel(${index})">
            Remove
          </button>
        </div>
        `
        cartContent.appendChild(cartItem)
        cart.push(cartItem);
        })
        // cartItem.appendChild(cartItem)
}

function cartDel(index) {
    // let todo = localStorage.getItem("todo");
    // cart = JSON.parse(todo);
    cart.pop(index, 1);
    // localStorage.setItem("todo", JSON.stringify(cart));
    cartUpdate();
}

// const cart = [];


// function updateCart() {
//     const cartContainer = document.getElementById("cart-container");
//     cartContainer.innerHTML = "";

//     cart.forEach(product => {
//         const cartItem = document.createElement("div")
//         cartItem.innerHTML = `<span>${product.name}</span>
//         <span>${product.price}</span>
//         `
//         cartContainer.appendChild(cartItem)
//     }) 
// }

productsDisplay()