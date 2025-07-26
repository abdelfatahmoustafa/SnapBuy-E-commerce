# 🛒 SnapBuy E-commerce Project

## 📌 Project Summary

**SnapBuy** is a simple e-commerce web app built using **HTML, CSS, and JavaScript (with jQuery)**. It uses **LocalStorage** to store and manage data on the client side.  
The project supports different user roles: **Customer**, **Seller**, and **Admin**.  
This version mainly focuses on the **Seller Dashboard**, where sellers can add products, view product lists, and track sales statistics via a chart.

---

## 🚀  Repository

- 🗂️ **GitHub Repository:** [SnapBuy Repo](https://github.com/abdelfatahmoustafa/SnapBuy-E-commerce.git)

> _(Replace the links above with your actual live and repo URLs)_

---

## 🛠️ How to Run the Project

### 1. Initialize Store Data (Only Needed Once)

- Open `h.html` in your browser.
- This file initializes the store data in LocalStorage, including some default users and sample products.
- ⚠️ **This step is required before login — otherwise, login and product views won't work.**

### 2. Login or Create a New Account

- Open `login.html` to sign in.
- If you don't have an account, open `signup.html` to register.
  - You can choose "Sign up as a Seller" to create a seller account.
- After signing up, you will be redirected to the login page.

### 3. Access the Seller Dashboard

- After logging in with a seller account, you’ll be redirected to the seller home page (`index.html`).
- From there, use the sidebar or top navigation to explore:
  - **Overview:** View a sales chart (Bar Chart) for your top-selling products.
  - **Products:** View your product list.
  - **Add Product:** Create new products.
  - **Product List:** Browse your products in a table view.

### 4. Add a New Product

- On the "Add Product" page, enter the product details:
  - Name, price, quantity, colors, sizes, category, image, and description.
- You can also set a **discount**.
- Once added, the product will appear in your product list.

### 5. View Sales Chart

- On the **Overview** page, you’ll find a **Bar Chart** displaying your top-selling products.
- The chart is based on data from confirmed orders stored in LocalStorage.

---

## 🧑‍💻 Technical Notes

- **LocalStorage:** All data (users, products, orders) is saved in the browser's LocalStorage.
- **No Backend:** Everything runs on the client side.
- **Important Pages for Sellers:**
  - `index.html` – Seller homepage.
  - `Components/Overview/Overview.html` – Sales chart.
  - `Components/addproduct/product.html` – Add product form.
  - `Components/ProductList/ProductList.html` – Product list view.

---

## 🧪 Default Accounts

### 👨‍💼 Seller Demo Account

- **Email:** `Abdelfatah@gmail.com`
- **Password:** _(Check `h.html` or create a new seller account)_

### 🛡️ Admin Account

- **Email:** `admin@admin.com`
- **Password:** `6`

---

## ℹ️ Additional Notes

- If login doesn't work or no products appear, re-open `h.html` to reinitialize the store data.
- To reset the project completely, clear LocalStorage from your browser settings.

---

## 🙏 Thank You for Using SnapBuy!

Feel free to open issues or reach out if you have questions or need help running the project.
