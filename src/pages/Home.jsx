import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Sistema de Estacionamiento</h1>
      <nav className="mt-4 space-y-2">
        <Link to="/acceso" className="block text-blue-500">Registrar acceso</Link>
        <Link to="/salida" className="block text-blue-500">Registrar salida</Link>
        <Link to="/historial" className="block text-blue-500">Ver historial</Link>
        <Link to="/alumno" className="block text-blue-500">Consulta alumnos</Link>
      </nav>
    </div>
  )
}
