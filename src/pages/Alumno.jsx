import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Alumno() {
  const [alumnos, setAlumnos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAlumnos = async () => {
      const { data, error } = await supabase.from('alumno').select('*')
      if (error) {
        console.error('Error fetching alumnos:', error)
      } else {
        setAlumnos(data)
      }
      setLoading(false)
    }
    fetchAlumnos()
  }, [])

  if (loading) return <p>Cargando alumnos...</p>

  return (
    <div>
      <h2>Alumnos</h2>
      <ul>
        {alumnos.map((alumno) => (
          <li key={alumno.num_boleta}>
            {alumno.nombre} - {alumno.email} - Activo: {alumno.activo ? 'Sí' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  )
}
