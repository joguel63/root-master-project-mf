import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMui from "./components/layoutMui";

function App() {
  return (
    <BrowserRouter>
      <LayoutMui>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>Home</h1>
                <p>Esta es la pagina de inicio</p>
              </div>
            }
          />
          {/* <Route path="/prueba" element={<PrimerHijo />} /> */}
        </Routes>
      </LayoutMui>
    </BrowserRouter>
  );
}

export default App;
