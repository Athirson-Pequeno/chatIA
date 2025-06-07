import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MeuFormulario from "./components/Formulario";
import Resultado from "./services/ConfigurarAgente";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MeuFormulario />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>
  );
}

export default App;
