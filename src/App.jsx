
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Carrito from "./pages/CarritoContenedor/Carrito"
import BarraDeNavegacion from './pages/BarraDeNavegacion/BarraDeNavegacion';
import ListaDeArticuloContenedora from './pages/ListaDeArticuloContenedora/ListaDeArticuloContenedora';
import ArticuloDetalleContenedor from './pages/ArticuloDetalleContenedor/ArticuloDetalleContenedor';
import CarritoContextoProveedor from "./contenedores/Context/CarritoContexto"




function App() {



  return (
    <CarritoContextoProveedor>

      <BrowserRouter>
        <div className="App">


          <BarraDeNavegacion />


          <Routes>

            <Route path="/" element={<ListaDeArticuloContenedora />} />

            <Route path="/categoria/:id" element={<ListaDeArticuloContenedora />} />

            <Route path="/detalle/:id" element={<ArticuloDetalleContenedor />} />


            <Route path="/carrito" element={<Carrito />} />


            <Route path="/*" element={<Navigate to="/" replace />} />

          </Routes>

        </div>
      </BrowserRouter>
    </CarritoContextoProveedor>
  )
}

export default App
