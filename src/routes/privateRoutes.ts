import Home from '../pages/home/Home'
import Shop from '../pages/shop/Shop';
import Product from '../pages/product/Product';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Blog from '../pages/Blog/Blog';
import Cart from '../pages/Cart/Cart';
import Checkout from '../pages/checkout/checkout';
import Categories from '../Auth/pages/Categories';
import Dashboard from '../Auth/pages/Dashboard';
import Customers from '../Auth/pages/Customers';
import Products from '../Auth/pages/Products';
import ProductDetail from '../pages/product/New/productDetail/productDetail';

const privateRoutes = {
    home: {
        path: '/',
        component: Home,
        requiredLogin: true,
    },
    shop: {
        path: '/shop',
        component: Shop,
        requiredLogin: true,
    },
    product: {
        path: '/product',
        component: Product,
        requiredLogin: true,
    },
    productDetail: {
        path: '/Product/:id',
        component: ProductDetail,
        requiredLogin: true,
    },
    about: {
        path: '/about',
        component: About,
        requiredLogin: true,
    },
    contact: {
        path: '/contact',
        component: Contact,
        requiredLogin: true,
    },
    blog: {
        path: '/blog',
        component: Blog,
        requiredLogin: true,
    },
    cart: {
        path: '/cart',
        component: Cart,
        requiredLogin: true,
    },
    checkout: {
        path: '/checkout',
        component: Checkout,
        requiredLogin: true,
    },
    categories: {
        path: '/system/categories',
        component: Categories,
        requiredLogin: true,
        role: "Admin"
    },
    dashboard: {
        path: '/system',
        component: Dashboard,
        requiredLogin: true,
        role: "Admin"
    },
    customers: {
        path: '/system/customers',
        component: Customers,
        requiredLogin: true,
        role: "Admin"
    },
    products: {
        path: '/system/products',
        component: Products,
        requiredLogin: true,
        role: "Admin"
    },
};

export default privateRoutes;
