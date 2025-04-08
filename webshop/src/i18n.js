import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'navbar.home': 'Home',
      'navbar.admin': 'Admin',
      'navbar.cart': 'Cart',

      'homepage.sortAZ': 'Name A-Z',
      'homepage.sortZA': 'Name Z-A',
      'homepage.priceAsc': 'Price ascending',
      'homepage.priceDesc': 'Price descending',
      'homepage.ratingBest': 'Rating (highest)',
      'homepage.ratingWorst': 'Rating (lowest)',
      'homepage.category.men': "Men's clothing",
      'homepage.category.women': "Women's clothing",
      'homepage.category.jewelery': 'Jewellery',
      'homepage.category.electronics': 'Electronics',
      'homepage.viewProduct': 'View product',
      'homepage.addToCart': 'Add to cart',
      'homepage.toastAdded': 'Added to cart!',

      'login.email': 'Email:',
      'login.password': 'Password:',
      'login.loginButton': 'Login',

      'signup.email': 'Email:',
      'signup.password': 'Password:',
      'signup.registerButton': 'Register',

      'addProduct.title': 'Title:',
      'addProduct.price': 'Price:',
      'addProduct.description': 'Description:',
      'addProduct.category': 'Category:',
      'addProduct.image': 'Image link:',
      'addProduct.rating': 'Rating:',
      'addProduct.count': 'Count:',
      'addProduct.addButton': 'Add product',
    },
  },
  et: {
    translation: {
      'navbar.home': 'Avaleht',
      'navbar.admin': 'Halda',
      'navbar.cart': 'Ostukorv',

      'homepage.sortAZ': 'Nimi A–Z',
      'homepage.sortZA': 'Nimi Z–A',
      'homepage.priceAsc': 'Hind kasvavalt',
      'homepage.priceDesc': 'Hind kahanevalt',
      'homepage.ratingBest': 'Hinnang (kõrgeim)',
      'homepage.ratingWorst': 'Hinnang (madalaim)',
      'homepage.category.men': 'Meesteriided',
      'homepage.category.women': 'Naisteriided',
      'homepage.category.jewelery': 'Ehted',
      'homepage.category.electronics': 'Elektroonika',
      'homepage.viewProduct': 'Vaata toodet',
      'homepage.addToCart': 'Lisa ostukorvi',
      'homepage.toastAdded': 'Lisatud ostukorvi!',

      'login.email': 'E-post:',
      'login.password': 'Parool:',
      'login.loginButton': 'Logi sisse',

      'signup.email': 'E-post:',
      'signup.password': 'Parool:',
      'signup.registerButton': 'Registreeru',

      'addProduct.title': 'Pealkiri:',
      'addProduct.price': 'Hind:',
      'addProduct.description': 'Kirjeldus:',
      'addProduct.category': 'Kategooria:',
      'addProduct.image': 'Pildi link:',
      'addProduct.rating': 'Hinnang:',
      'addProduct.count': 'Arv:',
      'addProduct.addButton': 'Lisa toode',
    },
  },
  ru: {
    translation: {
      'navbar.home': 'Главная',
      'navbar.admin': 'Админ',
      'navbar.cart': 'Корзина',

      'homepage.sortAZ': 'Имя А–Я',
      'homepage.sortZA': 'Имя Я–А',
      'homepage.priceAsc': 'Цена по возрастанию',
      'homepage.priceDesc': 'Цена по убыванию',
      'homepage.ratingBest': 'Рейтинг (лучший)',
      'homepage.ratingWorst': 'Рейтинг (худший)',
      'homepage.category.men': 'Мужская одежда',
      'homepage.category.women': 'Женская одежда',
      'homepage.category.jewelery': 'Ювелирные изделия',
      'homepage.category.electronics': 'Электроника',
      'homepage.viewProduct': 'Посмотреть товар',
      'homepage.addToCart': 'Добавить в корзину',
      'homepage.toastAdded': 'Добавлено в корзину!',

      'login.email': 'Эл. почта:',
      'login.password': 'Пароль:',
      'login.loginButton': 'Войти',

      'signup.email': 'Эл. почта:',
      'signup.password': 'Пароль:',
      'signup.registerButton': 'Зарегистрироваться',
    },
  },
  es: {
    translation: {
      'navbar.home': 'Inicio',
      'navbar.admin': 'Admin',
      'navbar.cart': 'Carrito',

      'homepage.sortAZ': 'Nombre A–Z',
      'homepage.sortZA': 'Nombre Z–A',
      'homepage.priceAsc': 'Precio ascendente',
      'homepage.priceDesc': 'Precio descendente',
      'homepage.ratingBest': 'Valoración (mejor)',
      'homepage.ratingWorst': 'Valoración (peor)',
      'homepage.category.men': 'Ropa de hombre',
      'homepage.category.women': 'Ropa de mujer',
      'homepage.category.jewelery': 'Joyería',
      'homepage.category.electronics': 'Electrónica',
      'homepage.viewProduct': 'Ver producto',
      'homepage.addToCart': 'Añadir al carrito',
      'homepage.toastAdded': '¡Añadido al carrito!',

      'login.email': 'Correo electrónico:',
      'login.password': 'Contraseña:',
      'login.loginButton': 'Iniciar sesión',

      'signup.email': 'Correo electrónico:',
      'signup.password': 'Contraseña:',
      'signup.registerButton': 'Registrarse',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
