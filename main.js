const apiUrl = 'https://api.kedufront.juniortaker.com/item/';

const fetchData = async () => {
    try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error.response);
    }
}

// Define the cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// If the item is already in the cart, increase the amount
// If the item is not in the cart, add it with an amount of 1
const addToCart = (id) => {
    const existingItem = cart.find(cartItem => cartItem.id === id);

    if (existingItem) {

        existingItem.amount += 1;
    } else {
        cart.push({ id: id, amount: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
}

const addItemToContainer = (item, item_container) => {
    const itemDiv = document.createElement('div',);
    itemDiv.classList.add('item');

    itemDiv.innerHTML = `
        <h4>${item.name}</h4>
        <img src="${apiUrl}picture/${item._id}" alt="${item.name}" />
        <p>${item.price}€</p>
        <div class="action-container">
            <a href="html/product.html?id=${item._id}">Voir produit</a>
            <button onclick="addToCart(${item._id})">Ajouter au panier</button>
        </div>
    `;
    item_container.appendChild(itemDiv);
}

const DisplayItems = async () => {
    const data = await fetchData();
    let item_container = document.querySelector('.item-container');
    data.forEach(item => {
        addItemToContainer(item, item_container);
    });
}

DisplayItems();
