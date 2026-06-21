import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/pages/Inicio";
import { Torneos } from "./components/pages/Torneos";
import { Contacto } from "./components/pages/Contacto";
import { Nosotros } from "./components/pages/Nosotros";
import { Error404 } from "./components/pages/Error404";

function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Torneos" element={<Torneos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App