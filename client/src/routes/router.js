import Addblog from "../pages/AdminPage/Addblog";
import Addblogcat from "../pages/AdminPage/Addblogcat";
import Addbrand from "../pages/AdminPage/Addbrand";
import Addcat from "../pages/AdminPage/Addcat";
import Addcolor from "../pages/AdminPage/Addcolor";
import Addproduct from "../pages/AdminPage/Addproduct";
import Bloglist from "../pages/AdminPage/BlogList";
import Blogcatlist from "../pages/AdminPage/Blogcatlist";
import Brandlist from "../pages/AdminPage/Brandlist";
import Categorylist from "../pages/AdminPage/Categorylist";
import Colorlist from "../pages/AdminPage/Colorlist";
import Customers from "../pages/AdminPage/Customers";
import Dashboard from "../pages/AdminPage/DashBoard";
import Enquiries from "../pages/AdminPage/Enquiries";
import Orders from "../pages/AdminPage/Orders";
import Productlist from "../pages/AdminPage/Productlist";
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
  { path: "", component: Dashboard },
  { path: "enquiries", component: Enquiries },
  { path: "blog-list", component: Bloglist },
  { path: "blog-category-list", component: Blogcatlist },
  { path: "orders", component: Orders },
  { path: "blog", component: Addblog },
  { path: "blog-category", component: Addblogcat },
  { path: "category", component: Addcat },
  { path: "color", component: Addcolor },
  { path: "brand", component: Addbrand },
  { path: "product", component: Addproduct },
  { path: "customers", component: Customers },
  { path: "list-color", component: Colorlist },
  { path: "list-category", component: Categorylist },
  { path: "list-brand", component: Brandlist },
  { path: "list-product", component: Productlist },
  { path: "blog-category-lis", component: Blogcatlist, layout: null }
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
