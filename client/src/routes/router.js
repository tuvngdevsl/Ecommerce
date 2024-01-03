import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import OurStore from "../pages/OurStorePage";
import RegisterPage from "../pages/RegisterPage";

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
  { path: "/blog", component: BlogPage },
  { path: "/contact", component: ContactPage }
];

export { privateRouter, publicRoute };
