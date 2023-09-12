let item = document.getElementById("box");
let total = document.getElementById("total");
let custom = document.getElementById("custom");
let totalPrice = 0;
let track = 0;

//array for storing data of chocolates
const item_data = [
  {
    image: "./chocoImages/choco1.jpg",
    name: "Chocolairs",
    price: 150,
  },
  {
    image: "./chocoImages/choco2.jpg",
    name: "Hershey",
    price: 200,
  },
  {
    image: "./chocoImages/choco3.jpg",
    name: "Crispello",
    price: 250,
  },
  {
    image: "./chocoImages/choco4.jpg",
    name: "Almond",
    price: 130,
  },
  {
    image: "./chocoImages/choco5.jpg",
    name: "Bounty",
    price: 230,
  },
  {
    image: "./chocoImages/choco6.jpg",
    name: "5Star",
    price: 400,
  },
  {
    image: "./chocoImages/choco7.jpg",
    name: "Kisses",
    price: 300,
  },
  {
    image: "./chocoImages/choco8.jpg",
    name: "Munch",
    price: 350,
  },
  {
    image: "./chocoImages/choco9.jpg",
    name: "Twilight",
    price: 310,
  },
  {
    image: "./chocoImages/choco10.jpg",
    name: "Amul",
    price: 220,
  },
];

for (let i = 0; i < item_data.length; i++) {
  // Created a new div for each chocolate item
  const chocolateItem = document.createElement("div");
  chocolateItem.className = "card";

  // Set the innerHTML for the chocolate item
  chocolateItem.innerHTML = `
        <div style="background-color: antiquewhite;">
            <img src="${item_data[i].image}" alt="Avatar" style="width:100%">
        </div>
        <div class="container">
            <h4><b class="name" id="name${i}">${item_data[i].name}</b></h4>
            <h4 id="price${i}">(${item_data[i].price})</h4>
            <button class="buttn" id="btn${i}">ADD</button>
        </div>
    `;

  item.appendChild(chocolateItem);
}

// Initialize the total price display
total.innerText = `Total: ${totalPrice} INR`;

for (let i = 0; i < item_data.length; i++) {
  let btn = document.getElementById(`btn${i}`);

  btn.addEventListener("click", () => {
    if (track < 8 && btn.innerText == "ADD") {
      btn.innerText = "REMOVE";
      track++;
      totalPrice += item_data[i].price; // Add the price of the clicked item to the total
      total.innerText = `Item=(${track}/8)Total: ${totalPrice} INR`; // Update the total price display

      //on clicking ADD,name should be shown
      const list = document.createElement("li");
      list.className = "customItem";
      list.id = `customItem${i}`;
      list.innerText = document.getElementById(`name${i}`).innerText;
      custom.appendChild(list);
    } else if (track < 8 && btn.innerText == "REMOVE") {
      btn.innerText = "ADD";
      track--;
      totalPrice -= item_data[i].price; // Add the price of the clicked item to the total
      total.innerText = `Item=(${track}/8)Total: ${totalPrice} INR`; // Update the total price display

      const listToRemove = document.getElementById(`customItem${i}`);
      custom.removeChild(listToRemove);
    }
  });
}

total.innerText = `Total: ${totalPrice} INR`;
