import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

function Historial() {
  const [historial, setHistorial] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('historial_autos')
        .select('*')
        .order('fecha', { ascending: false })

      if (error) {
        console.error('Error cargando historial:', error)
      } else {
        setHistorial(data)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Historial de autos</h1>
      <ul>
        {historial.map(auto => (
          <li key={auto.id}>
            {auto.placa} - {auto.fecha}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Historial
