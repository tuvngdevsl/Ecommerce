import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./components/GlobalStyle";
import "./components/GlobalStyle/GlobalStyles.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <GlobalStyles>
    <App />
  </GlobalStyles>
);
