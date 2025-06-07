import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Acceso from './pages/Acceso'
import Salida from './pages/Salida'
import Historial from './pages/Historial'
import Alumno from './pages/Alumno'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/acceso" element={<Acceso />} />
      <Route path="/salida" element={<Salida />} />
      <Route path="/historial" element={<Historial />} />
      <Route path="/alumno" element={<Alumno />} />
    </Routes>
  )
}

export default App
