import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MeuFormulario from "./components/Formulario";
import Resultado from "./services/ConfigurarAgente";
import Formulario2 from "./components/FormularioContrarrazao";
import BarraNavegacao from "./components/BarraNavegacao";
import PaginaInicial from "./components/PaginaInicial";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%" }}>
      <Router>
        <ScrollToTop /> {/* ✅ Adicionado aqui */}
        <BarraNavegacao />
        
        <Box sx={{ flex: 1, width: "100%"}}>
          <Routes>
            <Route path="/" element={<PaginaInicial />} />
            <Route path="/formulario" element={<MeuFormulario />} />
            <Route path="/formulario2" element={<Formulario2 />} />
            <Route path="/resultado" element={<Resultado />} />
          </Routes>
        </Box>

        <Footer />
      </Router>
    </Box>
  );
}