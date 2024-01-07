import BlogDetail from "../pages/BlogDetail";
import BlogPage from "../pages/BlogPage";
import CartPage from "../pages/CartPage";
import CompareProductPage from "../pages/CompareProductPage";
import ContactPage from "../pages/ContactPage";
import ForgotPassword from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import OurStore from "../pages/OurStorePage";
import RegisterPage from "../pages/RegisterPage";
import ResetPassword from "../pages/ResetPasswordPage";
import WishlistPage from "../pages/WishListPage";

const privateRouter = [];

/*
 * Public Route
 */
const publicRoute = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/upload", component: RegisterPage, layout: null },
  { path: "/store", component: OurStore },
  { path: "/blogs", component: BlogPage },
  { path: "/blog/:id", component: BlogDetail },
  { path: "/contact", component: ContactPage },
  { path: "/compare", component: CompareProductPage },
  { path: "/wishlist", component: WishlistPage },
  { path: "/cart", component: CartPage },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/reset-password", component: ResetPassword }
];

export { privateRouter, publicRoute };
