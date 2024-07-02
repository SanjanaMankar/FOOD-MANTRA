
    const cart = [];

    document.querySelectorAll('.add-btn').forEach(button => {
        button.addEventListener('click', function() {
            const restaurant = this.closest('.restaurant');
            const name = restaurant.getAttribute('data-name');
            const price = parseInt(restaurant.getAttribute('data-price'));
            const quantity = parseInt(restaurant.querySelector('.quantity').value);

            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({ name, price, quantity });
            }

            updateCart();
        });
    });

    function updateCart() {
        const cartDiv = document.getElementById('cart');
        const cartCount = document.getElementById('cart-count');
        cartDiv.innerHTML = '';
        let total = 0;
        let count = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            count += item.quantity;
            cartDiv.innerHTML += <div>${item.name}: ₹${item.price} x ${item.quantity} = ₹${itemTotal}</div>;
        });

        document.getElementById('total').innerText = total;
        cartCount.innerText = count;
    }
