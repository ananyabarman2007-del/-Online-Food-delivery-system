let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({name: name, price: price});
    total += price;

    let count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }

    document.getElementById("total").innerText = total;

    displayCart();
    alert(name + " added to cart!");
}

function displayCart() {
    let list = document.getElementById("cart-items");
    list.innerHTML = "";

    cart.forEach(function(item, index) {
        let li = document.createElement("li");

        li.innerHTML = item.name + " - ₹" + item.price +
        ' <button onclick="removeItem(' + index + ')">Remove</button>';

        list.appendChild(li);
    });
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);

    let count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }

    document.getElementById("total").innerText = total;
    displayCart();
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Your order placed successfully!");

        cart = [];
        total = 0;

        let count = document.getElementById("cart-count");
        if (count) {
            count.innerText = 0;
        }

        document.getElementById("total").innerText = 0;
        displayCart();
    }
}