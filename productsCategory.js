document.addEventListener('DOMContentLoaded', function() {
    // 1. جلب البيانات
    const selectedCategory = localStorage.getItem('selectedCategory');
    const storedData = JSON.parse(localStorage.getItem('storeData'));
    const allProducts = storedData.Store[selectedCategory].Products;
    
    // 2. عناصر DOM
    const productsContainer = document.getElementById('productsContainer');
    const priceSlider = document.getElementById('priceRange');
    const maxPriceDisplay = document.getElementById('maxPrice');
    const viewButtons = document.querySelectorAll('.view-options button');
    const cartCountElement = document.querySelector('.cart-count');
    
    // 3. إدارة سلة التسوق
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    function updateCartCount() {
        cartCountElement.textContent = cartItems.length;
    }
    
    function addToCart(product) {
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartCount();
        
        // تأثير الإضافة
        const cartIcon = document.querySelector('.cart-icon');
        cartIcon.classList.add('added-to-cart');
        setTimeout(() => {
            cartIcon.classList.remove('added-to-cart');
        }, 500);
    }
    
    // 4. حساب نطاق الأسعار
    const prices = allProducts.map(p => parseFloat(p.ProductPrice));
    const maxPrice = Math.max(...prices);
    priceSlider.min = Math.min(...prices);
    priceSlider.max = maxPrice;
    priceSlider.value = maxPrice;
    maxPriceDisplay.textContent = maxPrice;
    
    // 5. دالة عرض المنتجات
    function renderProducts(maxPriceFilter = maxPrice, viewType = 'grid') {
        productsContainer.innerHTML = '';
        productsContainer.className = viewType === 'grid' ? 'products-grid' : 'products-list';
        
        const filteredProducts = allProducts.filter(product => {
            return parseFloat(product.ProductPrice) <= maxPriceFilter;
        });
        
        if(filteredProducts.length === 0) {
            productsContainer.innerHTML = `
                <div class="no-products">
                    <i class="fas fa-box-open"></i>
                    <p>لا توجد منتجات في هذا النطاق السعري</p>
                </div>
            `;
            return;
        }
        
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            productCard.innerHTML = viewType === 'list' ? `
                <div class="product-img">
                    <img src="${product.ProductImage[0]}" alt="${product.ProductName}">
                    ${product.ProductStatus !== 'InStore' ? 
                      `<span class="product-badge">${product.ProductStatus}</span>` : ''}
                    <div class="product-actions">
                        <button class="action-btn quick-view" title="عرض سريع">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn add-to-wishlist" title="إضافة للمفضلة">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.ProductName}</h3>
                    <p class="product-desc">${product.ProductDescription}</p>
                    <div class="product-footer">
                        <p class="product-price">${parseFloat(product.ProductPrice).toFixed(2)} جنيه</p>
                        <button class="add-to-cart">Add To Card</button>
                    </div>
                </div>
            ` : `
                <div class="product-img">
                    <img src="${product.ProductImage[0]}" alt="${product.ProductName}">
                    ${product.ProductStatus !== 'InStore' ? 
                      `<span class="product-badge">${product.ProductStatus}</span>` : ''}
                    <div class="product-actions">
                        <button class="action-btn quick-view" title="عرض سريع">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="action-btn add-to-wishlist" title="إضافة للمفضلة">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.ProductName}</h3>
                    <p class="product-price">${parseFloat(product.ProductPrice).toFixed(2)} جنيه</p>
                    <button class="add-to-cart">Add To Cart</button>
                </div>
            `;
            
            // إضافة حدث السلة
            const addBtn = productCard.querySelector('.add-to-cart');
            addBtn.addEventListener('click', () => addToCart(product));
            
            productsContainer.appendChild(productCard);
        });
    }
    
    // 6. أحداث السلايدر
    priceSlider.addEventListener('input', function() {
        const selectedPrice = parseFloat(this.value);
        maxPriceDisplay.textContent = selectedPrice;
        const currentView = document.querySelector('.view-options button.active').dataset.view;
        renderProducts(selectedPrice, currentView);
    });
    
    // 7. أحداث أزرار العرض
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            viewButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const viewType = this.dataset.view;
            renderProducts(parseFloat(priceSlider.value), viewType);
        });
    });
    
    // 8. التهيئة الأولية
    updateCartCount();
    renderProducts();
});