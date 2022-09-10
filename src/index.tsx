import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
