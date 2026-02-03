
  import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import Obrigado from "./app/components/obrigado/obrigado.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/obrigado" element={<Obrigado />} />
    </Routes>
  </BrowserRouter>
);
  