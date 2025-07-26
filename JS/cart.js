// // let cartItemsDiv = document.getElementById('cart-items');
// // let totalItems = document.getElementById('total-items');
// // let items = document.getElementById("items-count")
// // let userName = document.getElementById("user-name")
// // let userEmail = document.getElementById("user-email")

// // let currentUser=  JSON.parse(localStorage.getItem("currentUser"))
// // console.log(currentUser)
// // userName.innerHTML = `${currentUser.username}`
// // userEmail.innerHTML = `${currentUser.email}`



// // let displayCart = () => {
// //     cartItemsDiv.innerHTML = ''
// // items.innerHTML=`${currentUser.items}`
// //     if (currentUser && currentUser.cart.length > 0) {
// //         currentUser.cart.forEach((item, index) => {
// //             let cartElemnet = document.createElement("div");
// //             cartElemnet.classList.add("row");
// //             cartElemnet.classList.add("align-items-center");
// //             cartElemnet.classList.add("cart-elemnet");
// //             cartElemnet.innerHTML =
// //             `
// //             <img src=${item.ProductImage} class="col-md-2 col-sm-3 col-3">
// //             <h3 class="col-md-4 col-sm-4 col-5">${item.ProductName}</h3>
// //             <p class="col-md-3 col-sm-2 text-center col-2">$${item.ProductPrice}</p>
// //             <p class="col-md-2 col-sm-2 text-center col-1">${item.quantity}</p>
// //             <i class="fa-solid fa-xmark col-md-1 col-1 text-center remove-from-cart" data-index=${index}></i>

// //             `
// //             cartItemsDiv.appendChild(cartElemnet)

// //         })
// //         updateTotalPrice()
// //         totalItems.innerHTML = `${currentUser.items} items`
// //     }
// //     else {
// //         cartItemsDiv.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
// //         totalItems.innerHTML = ``
// //     }
// // }
// // let updateTotalPrice = () => {
// //     let totalPrice = currentUser.cart.reduce((total, item) => total + (item.ProductPrice * item.quantity), 0);
// //     document.getElementById('total-price').textContent = `Total Price: $${totalPrice}`;
// // };
// // let removeFromCart = (index) => {
// //     currentUser.items-=parseInt(currentUser.cart[index].quantity)
// //     currentUser.cart.splice(index, 1)
// //     localStorage.setItem('currentUser', JSON.stringify(currentUser));
// //     let users = JSON.parse(localStorage.getItem('users')) || [];
// //     let updatedUsers = users.map(u => u.email === currentUser.email ? currentUser : u);
// //     localStorage.setItem('users', JSON.stringify(updatedUsers));  // Update users in localStorage
// //     displayCart();
// //     updateTotalPrice();
// // }



// // document.addEventListener('click', function (e) {
// //     if (e.target.classList.contains('remove-from-cart')) {
// //         let index = parseInt(e.target.getAttribute('data-index'));
// //         removeFromCart(index);
// //     }
// // });
// // displayCart()


// // document.getElementById("checkout").addEventListener("click", ()=>{
// //     // window.location.href="/checkout.html"
// //     window.location.href = '/checkout.html';
// // });






// // جلب العناصر من الصفحة (DOM elements)
// let cartItemsDiv = document.getElementById('cart-items');
// let totalItems = document.getElementById('total-items');
// let items = document.getElementById("items-count");
// let userName = document.getElementById("user-name");
// let userEmail = document.getElementById("user-email");

// // جلب المستخدم الحالي من localStorage
// let currentUser = JSON.parse(localStorage.getItem("currentUser"));
// let cart = JSON.parse(localStorage.getItem("cart"))
// console.log(currentUser);

// // عرض اسم وإيميل المستخدم
// userName.innerHTML = `${currentUser.username}`;
// userEmail.innerHTML = `${currentUser.email}`;

// // دالة عرض السلة
// let displayCart = () => {
//     // تنظيف المحتوى السابق
//     cartItemsDiv.innerHTML = '';
//     items.innerHTML = `${currentUser.items}`;

//     // لو فيه منتجات في السلة
//     if (currentUser && cart.length > 0) {
//         cart.forEach((item, index) => {

//             // إنشاء عنصر لكل منتج في السلة
//             let cartElemnet = document.createElement("div");
//             cartElemnet.classList.add("row", "align-items-center", "cart-elemnet");

//             // item.quantity = +1
//             // محتوى المنتج داخل السلة
//             cartElemnet.innerHTML = `
//                 <img src="${item.ProductImage}" class="col-md-2 col-sm-3 col-3">
//                 <h3 class="col-md-4 col-sm-4 col-5">${item.ProductName}</h3>
//                 <p class="col-md-3 col-sm-2 text-center col-2">$${item.ProductPrice}</p>
//                 <p class="col-md-2 col-sm-2 text-center col-1">${item.quantity}</p>
//                 <i class="fa-solid fa-xmark col-md-1 col-1 text-center remove-from-cart" data-index="${index}"></i>
//             `;

//             // إضافته إلى الصفحة
//             cartItemsDiv.appendChild(cartElemnet);
//         });

//         // تحديث السعر الإجمالي وعدد العناصر
//         updateTotalPrice();
//         totalItems.innerHTML = `${currentUser.items} items`;
//     } else {
//         // لو السلة فاضية
//         cartItemsDiv.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
//         totalItems.innerHTML = '';
//     }
// };




// // let addToCart = (productId) => {

// //     if (currentUser) {
// //         let product = products.find(pro => pro.id === productId)
// //         let productInCart = currentUser.cart.find(item => item.id === productId);
// //         currentUser.items += 1
// //         items.innerHTML = `${currentUser.items}`
// //         if (productInCart) {
// //             productInCart.quantity += 1;
// //             alert("Product quantity updated in cart");
// //         }
// //         else {
// //             currentUser.cart.push({ ...product })
// //             alert(`${product.name} added to cart`);
// //         }
// //         localStorage.setItem('currentUser', JSON.stringify(currentUser));
// //         updateLocalStorage(currentUser)
// //     } else {
// //         alert("You need to sign in first!");
// //     }
// // }











// // دالة لحساب السعر الإجمالي
// let updateTotalPrice = () => {
//     let totalPrice = currentUser.cart.reduce((total, item) => total + (item.ProductPrice * item.quantity), 0);
//     document.getElementById('total-price').textContent = `Total Price: $${totalPrice}`;
// };

// // دالة لحذف منتج من السلة
// // let removeFromCart = (index) => {
// //     // تقليل عدد العناصر الإجمالي
// //     currentUser.items -= parseInt(currentUser.cart[index].quantity);

// //     // حذف المنتج من المصفوفة
// //     currentUser.cart.splice(index, 1);

// //     // حفظ التحديث في localStorage
// //     localStorage.setItem('currentUser', JSON.stringify(currentUser));

// //     // تحديث المستخدم في قائمة المستخدمين
// //     let users = JSON.parse(localStorage.getItem('users')) || [];
// //     let updatedUsers = users.map(u => u.email === currentUser.email ? currentUser : u);
// //     localStorage.setItem('users', JSON.stringify(updatedUsers));

// //     // تحديث العرض
// //     displayCart();
// //     updateTotalPrice();
// // };
// // let removeFromCart = (index) => {
// //     cart -=parseInt(cart[index].quantity)
// //     // cart.splice(index, 1)
// //     localStorage.setItem('cart', JSON.stringify(cart));
// //     let users = JSON.parse(localStorage.getItem('users')) || [];
// //     // let updatedUsers = users.map(u => u.email === currentUser.email ? currentUser : u);
// //     // localStorage.setItem('users', JSON.stringify(updatedUsers));  // Update users in localStorage
// //     displayCart();
// //     updateTotalPrice();
// // }
// // document.addEventListener('click', function (e) {
// //     if (e.target.classList.contains('remove-from-cart')) {
// //         let index = parseInt(e.target.getAttribute('data-index'));
// //         removeFromCart(index);
// //     }
// // });




// let removeFromCart = (index) => {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     if (index >= 0 && index < cart.length) {
//         let confirmed = confirm(`هل أنت متأكد أنك تريد حذف المنتج: ${cart[index].ProductName} من السلة؟`);

//         if (confirmed) {
//             cart.splice(index, 1); // حذف المنتج من المصفوفة
//             localStorage.setItem('cart', JSON.stringify(cart)); // تحديث localStorage

//             displayCart();       // إعادة عرض المنتجات
//             updateTotalPrice();  // تحديث السعر الإجمالي
//         }
//     }
// };

// document.addEventListener('click', function (e) {
//     if (e.target.classList.contains('remove-from-cart')) {
//         let index = parseInt(e.target.getAttribute('data-index'));
//         removeFromCart(index);
//     }
// });









// // حدث كليك لحذف منتج عند الضغط على علامة ×
// // document.addEventListener('click', function (e) {
// //     if (e.target.classList.contains('remove-from-cart')) {
// //         let index = parseInt(e.target.getAttribute('data-index'));
// //         removeFromCart(index);
// //     }
// // });

// // عرض السلة في أول تحميل
// displayCart();

// // الانتقال لصفحة الدفع عند الضغط على checkout
// document.getElementById("checkout").addEventListener("click", () => {
//     window.location.href = '/checkout.html';
// });



















































// جلب العناصر
let cartItemsDiv = document.getElementById('cart-items');
let totalItems = document.getElementById('total-items');
let items = document.getElementById("items-count");
let userName = document.getElementById("user-name");
let userEmail = document.getElementById("user-email");

// جلب المستخدم الحالي والسلة
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// عرض اسم وإيميل المستخدم
userName.innerHTML = currentUser.username || "";
userEmail.innerHTML = currentUser.email || "";

// // ✅ دالة إضافة منتج للسلة
// let addToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     let existingProduct = cart.find(p => p.ProductCode === product.ProductCode);
//     console.log(existingProduct)
    
//     if (existingProduct) {
//         alert("Product quantity updated in cart");
//         co
//         existingProduct.quantity += 1;
//     } else {
//         product.quantity = 1;
//         cart.push({...product});
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));



//     // تحديث currentUser
//     currentUser.items = cart.reduce((sum, p) => sum + p.quantity, 0);
//     currentUser.cart = cart;
//     localStorage.setItem("currentUser", JSON.stringify(currentUser));

//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     let updatedUsers = users.map(u => u.email === currentUser.email ? currentUser : u);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));

//     displayCart();
//     updateTotalPrice();
// }






// let addToCart = (product) => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];

//     // Ensure types match (string/number)
//     let existingProduct = cart.find(p => String(p.ProductCode) === String(product.ProductCode));

//     if (existingProduct) {
        
//         existingProduct.quantity += 1;
//     } else {
//         let newProduct = { ...product, quantity: 1 }; // avoid modifying original object
//         cart.push(newProduct);
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     // Update current user
//     currentUser.items = cart.reduce((sum, p) => sum + p.quantity, 0);
//     currentUser.cart = cart;
//     localStorage.setItem("currentUser", JSON.stringify(currentUser));

//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     let updatedUsers = users.map(u => u.email === currentUser.email ? currentUser : u);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));

//     displayCart();
//     updateTotalPrice();
// };











// let addToCart = (product) => {
//     console.log("🚀 addToCart called with:", product); // Debug 1

//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     console.log("🛒 Current cart:", cart); // Debug 2

//     console.log("🔍 Searching for ProductCode:", product.ProductCode); // Debug 3

//     let existingProductIndex = cart.findIndex(p => p.ProductCode === product.ProductCode);
//     console.log("📌 existingProductIndex:", existingProductIndex); // Debug 4

//     if (existingProductIndex !== -1) {
//         cart[existingProductIndex].quantity += 1;
//     } else {
//         product.quantity = 1;
//         cart.push(product);
//     }

//     localStorage.setItem("cart", JSON.stringify(cart));

//     currentUser.items = cart.reduce((sum, p) => sum + p.quantity, 0);
//     currentUser.cart = cart;
//     localStorage.setItem("currentUser", JSON.stringify(currentUser));

//     let users = JSON.parse(localStorage.getItem('users')) || [];
//     let updatedUsers = users.map(u => u.email === currentUser.email ? currentUser : u);
//     localStorage.setItem('users', JSON.stringify(updatedUsers));

//     displayCart();
//     updateTotalPrice();
// };



// addToCart()



















// ✅ دالة عرض السلة
let displayCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItemsDiv.innerHTML = '';
    // items.innerHTML = `${currentUser.items}`;
    let TotalItems=0;
    if (cart.length > 0) {
        cart.forEach((item, index) => {
            let cartElemnet = document.createElement("div");
            cartElemnet.classList.add("row", "align-items-center", "cart-elemnet");
            cartElemnet.innerHTML = `
                <img src="${item.ProductImage}" class="col-md-2 col-sm-3 col-3">
                <h3 class="col-md-4 col-sm-4 col-5">${item.ProductName}</h3>
                <p class="col-md-3 col-sm-2 text-center col-2">$${item.ProductPrice}</p>
                <p class="col-md-2 col-sm-2 text-center col-1">${item.quantity}</p>
                <i class="fa-solid fa-xmark col-md-1 col-1 text-center remove-from-cart" data-index="${index}"></i>
            `;
            cartItemsDiv.appendChild(cartElemnet);
            TotalItems+=item.quantity
        });
totalItems.innerHTML = `${TotalItems} items`;
      
    } else {
        cartItemsDiv.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        totalItems.innerHTML = '';
    }
};
displayCart()
// ✅ دالة حذف منتج من السلة
let removeFromCart = (index) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (index >= 0 && index < cart.length) {
        let confirmed = confirm(`هل أنت متأكد أنك تريد حذف المنتج: ${cart[index].ProductName} من السلة؟`);

        if (confirmed) {
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));

            currentUser.items = cart.reduce((sum, p) => sum + p.quantity, 0);
            currentUser.cart = cart;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            let users = JSON.parse(localStorage.getItem('users')) || [];
            let updatedUsers = users.map(u => u.email === currentUser.email ? currentUser : u);
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            displayCart();
            updateTotalPrice();
        }
    }
};

// ✅ دالة لحساب السعر الإجمالي
let updateTotalPrice = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalPrice = cart.reduce((total, item) => total + (item.ProductPrice * item.quantity), 0);
    document.getElementById('total-price').innerHTML = `Total Price: $${totalPrice}`;
};
updateTotalPrice()
// ✅ حدث الحذف
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('remove-from-cart')) {
        let index = parseInt(e.target.getAttribute('data-index'));
        removeFromCart(index);
    }
});

// ✅ تحميل الصفحة
displayCart();

// ✅ زر الدفع
document.getElementById("checkout").addEventListener("click", () => {
    if(localStorage.getItem("currentUser")){
        window.location.href = '/checkout.html';
    }else{
        alert("you need to login first")
        window.location.href="/login.html"
    }
});
