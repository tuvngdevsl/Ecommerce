import AdminLayout from "../components/layout/AdminLayout";
import Dashboard from "../pages/AdminPage/DashBoard";
import BlogDetail from "../pages/BlogDetail";
import BlogPage from "../pages/BlogPage";
import CartPage from "../pages/CartPage";
import Checkout from "../pages/CheckoutPage";
import CompareProductPage from "../pages/CompareProductPage";
import ContactPage from "../pages/ContactPage";
import ForgotPassword from "../pages/ForgotPasswordPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import OurStore from "../pages/OurStorePage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ProductDetail from "../pages/ProductDetail";
import RefundPolicyPage from "../pages/RefundPolicyPage";
import RegisterPage from "../pages/RegisterPage";
import ResetPassword from "../pages/ResetPasswordPage";
import ShippingPolicyPage from "../pages/ShippingPolicyPage";
import TermAndConditionsPage from "../pages/TermsandConditionsPage";
import WishlistPage from "../pages/WishListPage";

const privateRouter = [
  { path: "/admin", component: Dashboard },
  { path: "/admin/product", component: AdminLayout, layout: null }
];

/*
 * Public Route
 */
const publicRoute = [
  { path: "/", component: HomePage },
  { path: "/login", component: LoginPage },
  { path: "/register", component: RegisterPage },
  { path: "/upload", component: RegisterPage, layout: null },
  { path: "/product", component: OurStore },
  { path: "/blogs", component: BlogPage },
  { path: "/blog/:id", component: BlogDetail },
  { path: "/contact", component: ContactPage },
  { path: "/compare", component: CompareProductPage },
  { path: "/wishlist", component: WishlistPage },
  { path: "/cart", component: CartPage },
  { path: "/forgot-password", component: ForgotPassword },
  { path: "/reset-password", component: ResetPassword },
  { path: "/privacy-policy", component: PrivacyPolicyPage },
  { path: "/refund-policy", component: RefundPolicyPage },
  { path: "/shipping-policy", component: ShippingPolicyPage },
  { path: "/terms-conditions", component: TermAndConditionsPage },
  { path: "/product/:id", component: ProductDetail },
  { path: "/checkout", component: Checkout }
];

export { privateRouter, publicRoute };
