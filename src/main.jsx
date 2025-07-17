import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import TopicProvider from "./Components/Context/TopicContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
      <TopicProvider>
        <App/>
      </TopicProvider>
    </StrictMode>
)