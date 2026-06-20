import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Inicio } from "./components/routes/Inicio";
import { Torneos } from "./components/routes/Torneos";
import { Contacto } from "./components/routes/Contacto"
import { Nosotros } from "./components/routes/Nosotros"

function App() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Torneos" element={<Torneos />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default App
