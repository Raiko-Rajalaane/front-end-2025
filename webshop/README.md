# Webshop React Project 🛒

This is a simple webshop application built as part of a front-end development course in 2025. The goal was to learn core React concepts, practice working with JSX, and implement internationalization (i18n) support in a real-world UI context.

---

## ✨ Features

- 🛍️ Product listing with sorting and filtering
- 🛒 Add to cart / Remove from cart / Clear cart
- 🔧 Admin panel: add, edit, delete products
- 🌍 Multi-language support (English, Estonian, Russian, Spanish)
- 🔔 Toast notifications for user actions
- 🧭 Page navigation with React Router
- 📬 Contact form using EmailJS
- ❌ 404 page for unknown routes
- 📍 Store locator map using Leaflet

---

## 🌐 Internationalization (i18n)

The app uses `react-i18next` to support 4 languages:

- English (`en`)
- Estonian (`et`)
- Russian (`ru`)
- Spanish (`es`)

All visible text in the UI is translated and organized with clear i18n keys.

---

## 🛠️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [react-router-dom](https://reactrouter.com/)
- [react-i18next](https://react.i18next.com/)
- [react-toastify](https://fkhadra.github.io/react-toastify/)
- [EmailJS](https://www.emailjs.com/)
- [Leaflet](https://leafletjs.com/)

---

## 🚀 Getting Started

1. Clone the project:
   ```bash
   git clone https://github.com/Raiko-Rajalaane/front-end-2025.git
   cd front-end-2025/webshop
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Open in browser:
   ```
   http://localhost:5173
   ```

---

## 🧪 Notes

- Data is currently loaded from `.json` files (simulating a backend).
- Cart actions and product changes affect the local in-memory data and reset on refresh.
- This project is built for practice purposes and does not include persistent storage or authentication.

---

## 📁 Folder Structure

```
webshop/
├── data/                  # Product and cart JSON data
├── pages/                 # Main React pages (Home, Cart, Admin, etc.)
├── i18n.js                # Translations and language setup
├── App.jsx                # App routing and layout
├── main.jsx               # React entry point
└── ...
```

---

## 👨‍💻 Author

Made with focus, coffee, and curiosity by **Raiko Rajalaane**  
This project was part of my learning journey in 2025.  
Feel free to explore or contribute ideas.

---
