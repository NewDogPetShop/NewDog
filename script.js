const productsGrid = document.getElementById('productsGrid');
// Se actualizan las referencias de DOM para el nuevo carrito lateral
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartCountSpan = document.getElementById('cartCount');
const cartTotalElement = document.getElementById('cartTotal');

let cart = JSON.parse(localStorage.getItem('newDogCart')) || [];

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    filterProducts(); // Renderiza los productos al cargar
    updateCartDisplay(); // Actualiza el contador del carrito
});

// =========================================================================
// FUNCIONES DE PRODUCTOS Y FILTRADO
// =========================================================================

/**
 * Crea la tarjeta HTML para un solo producto.
 * @param {object} product - El objeto del producto.
 * @returns {string} El HTML de la tarjeta del producto.
 */
function createProductCard(product) {
    // Mostrar la imagen del producto con manejo de error
    const imageContent = `
        <div class="image-container">
            <img src="${product.image}" 
                 alt="${product.name}" 
                 class="product-image"
                 onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex'">
            <div class="no-image-placeholder">
                ⚠️ Imagen no disponible
            </div>
            <span class="product-icon">${product.icon}</span>
        </div>
    `;

    // Formato de precio en pesos uruguayos (o el formato local)
    const formattedPrice = product.price.toLocaleString('es-UY', {
        style: 'currency',
        currency: 'UYU', // Puedes cambiar 'UYU' (Pesos Uruguayos) por tu moneda local si es diferente.
        minimumFractionDigits: 0
    }).replace('UYU', '$');

    return `
        <div class="product-card" data-id="${product.id}">
            ${imageContent}
            <div class="product-info">
                <div>
                    <p class="product-brand">${product.brand}</p>
                    <h3 class="product-name">${product.name}</h3>
                </div>
                <div class="product-details">
                    <p>Tipo: ${product.type}</p>
                    <p>Etapa: ${product.stage}</p>
                    <p>Peso: ${product.weight}</p>
                    <p class="product-price">${formattedPrice}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    `;
}

/**
 * Filtra y renderiza los productos en la cuadrícula.
 */
function filterProducts() {
    // Asegurarse de que allProducts esté definido (viene de products.js)
    if (typeof allProducts === 'undefined') {
        console.error("El array 'allProducts' no está definido. Asegúrate de que products.js esté cargado correctamente.");
        return;
    }

    const type = document.getElementById('filterType').value;
    const stage = document.getElementById('filterStage').value;
    const brand = document.getElementById('filterBrand').value;
    const search = document.getElementById('searchBar').value.toLowerCase();

    const filteredProducts = allProducts.filter(product => {
        const matchesType = type === 'all' || product.type === type;
        const matchesStage = stage === 'all' || product.stage === stage;
        const matchesBrand = brand === 'all' || product.brand === brand;
        const matchesSearch = product.name.toLowerCase().includes(search) || product.brand.toLowerCase().includes(search);

        return matchesType && matchesStage && matchesBrand && matchesSearch;
    });

    productsGrid.innerHTML = filteredProducts.map(createProductCard).join('');
    updateBrandFilters();
}

/**
 * Llena el <select> de marcas basado en los productos disponibles.
 */
function updateBrandFilters() {
    const brandFilter = document.getElementById('filterBrand');
    const type = document.getElementById('filterType').value;
    const stage = document.getElementById('filterStage').value;

    // Obtiene las marcas únicas que coinciden con los filtros actuales de tipo y etapa
    const uniqueBrands = allProducts
        .filter(product => {
            const matchesType = type === 'all' || product.type === type;
            const matchesStage = stage === 'all' || product.stage === stage;
            return matchesType && matchesStage;
        })
        .map(product => product.brand)
        .filter((brand, index, self) => self.indexOf(brand) === index)
        .sort();

    // Limpia y añade la opción 'Todas'
    brandFilter.innerHTML = '<option value="all">Marca: Todas</option>';

    // Añade las marcas únicas como opciones
    uniqueBrands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });

    // Se mantiene el filtro de marca si estaba seleccionado previamente
    const currentBrand = brandFilter.getAttribute('data-current') || 'all';
    if (uniqueBrands.includes(currentBrand) || currentBrand === 'all') {
        brandFilter.value = currentBrand;
    }
}

// Escuchar cambios en los filtros y guardar el estado de la marca
document.getElementById('filterType').addEventListener('change', () => {
    document.getElementById('filterBrand').value = 'all'; // Reset brand on type change
    document.getElementById('filterBrand').removeAttribute('data-current');
    filterProducts();
});

document.getElementById('filterStage').addEventListener('change', () => {
    document.getElementById('filterBrand').value = 'all'; // Reset brand on stage change
    document.getElementById('filterBrand').removeAttribute('data-current');
    filterProducts();
});

document.getElementById('filterBrand').addEventListener('change', (e) => {
    document.getElementById('filterBrand').setAttribute('data-current', e.target.value);
    filterProducts();
});


// =========================================================================
// FUNCIONES DEL CARRITO
// =========================================================================

/**
 * Agrega un producto al carrito por su ID.
 * @param {number} productId - El ID del producto a agregar.
 */
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);

    if (product) {
        const cartItem = cart.find(item => item.id === productId);

        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        
        saveCart();
        renderCart();
        updateCartDisplay();
        toggleCart(true); // Abre el carrito al añadir un producto
    }
}

/**
 * Abre o cierra el carrito deslizable.
 * @param {boolean} [forceOpen] - Si es true, fuerza la apertura.
 */
function toggleCart(forceOpen) {
    const isActive = cartDrawer.classList.contains('active');
    
    if (forceOpen || !isActive) {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Evita el scroll del fondo
    } else {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

/**
 * Renderiza los items en el carrito.
 */
function renderCart() {
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">El carrito está vacío. ¡Agrega productos!</p>';
        cartTotalElement.textContent = '$0';
        return;
    }

    const cartItemsHTML = cart.map(item => {
        // Formato de precio en pesos uruguayos (o el formato local)
        const itemTotal = (item.price * item.quantity).toLocaleString('es-UY', {
            style: 'currency',
            currency: 'UYU',
            minimumFractionDigits: 0
        }).replace('UYU', '$');
        
        return `
            <div class="cart-item" data-id="${item.id}">
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">${itemTotal}</p>
                </div>
                <div class="cart-item-quantity-controls">
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    <button class="qty-btn" style="background-color: #ffcccc; color: #cc0000;" onclick="removeFromCart(${item.id})">🗑</button>
                </div>
            </div>
        `;
    }).join('');

    cartItemsContainer.innerHTML = cartItemsHTML;
    
    // Calcular y actualizar el total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const formattedTotal = total.toLocaleString('es-UY', {
        style: 'currency',
        currency: 'UYU',
        minimumFractionDigits: 0
    }).replace('UYU', '$');
    
    cartTotalElement.textContent = formattedTotal;
}

/**
 * Actualiza la cantidad de un item en el carrito.
 * @param {number} productId - El ID del producto.
 * @param {number} delta - El cambio de cantidad (-1 o +1).
 */
function updateCartQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity += delta;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            renderCart();
            updateCartDisplay();
        }
    }
}

/**
 * Elimina un item del carrito.
 * @param {number} productId - El ID del producto a eliminar.
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCart();
    updateCartDisplay();
}

/**
 * Guarda el carrito en el almacenamiento local y actualiza el contador.
 */
function saveCart() {
    localStorage.setItem('newDogCart', JSON.stringify(cart));
}

/**
 * Actualiza el contador de items en el botón del carrito.
 */
function updateCartDisplay() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = totalItems;
}

/**
 * Genera el mensaje de WhatsApp para el checkout y redirige.
 */
function checkout() {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const productsList = cart.map(item => {
        // Usa el peso para diferenciar productos similares en el mensaje
        return `* ${item.name} (${item.weight}) x ${item.quantity} - $${(item.price * item.quantity).toLocaleString('es-UY', { minimumFractionDigits: 0 })}`;
    }).join('\n');

    // Número de WhatsApp para contacto
    const whatsappNumber = "59896500718"; 

    const message = `¡Hola! Me gustaría hacer un pedido de New Dog Pet Shop. \n\n*Mi Pedido:*\n${productsList}\n\n*Total a Pagar:* $${total.toLocaleString('es-UY', { minimumFractionDigits: 0 })}\n\nPor favor, confírmenme la disponibilidad y el costo de envío. ¡Gracias!`;
    
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre la nueva URL en una nueva pestaña
    window.open(whatsappURL, '_blank');
}