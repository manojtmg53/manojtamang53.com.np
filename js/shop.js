document.addEventListener('DOMContentLoaded', function() {
    // Simple shopping cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total span');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    
    let cart = [];
    
    // Add to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            const productImage = productCard.querySelector('img').src;
            
            // Add to cart array
            cart.push({
                name: productName,
                price: productPrice,
                image: productImage
            });
            
            // Update cart UI
            updateCartUI();
            
            // Show feedback
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
    
    // Update cart UI
    function updateCartUI() {
        // Clear cart
        cartItems.innerHTML = '';
        
        // Add items
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div>
                    <h4>${item.name}</h4>
                    <p>${item.price}</p>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Calculate total (simple version)
        const total = cart.length * 10; // This is simplified - you'd calculate actual prices
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }
    
    // Toggle cart sidebar
    function toggleCart() {
        cartSidebar.classList.toggle('show');
        cartOverlay.classList.toggle('show');
    }
    
    // Close cart
    closeCart.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', toggleCart);
    
    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-filter button');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would filter products by category
            // This is a simplified version
            console.log('Filter by:', this.textContent);
        });
    });
});