import React from 'react'
import { Card } from '../ui/card'

const CardColaboracion = () => {
  return (
    <Card className='bg-foreground text-background p-6'>
        <h3>Agregar barra de búsqueda</h3>
        <p>Debemos agregar una barra de búsqueda para filtrar tareas según el contenido de las tarjetas.</p>
        <div className="iconos">
            <div className="icono">Francisco</div>
            <div className="icono">23 sep</div>
            <div className="icono">0/6</div>
            <div className="icono">Alta</div>
        </div>
    </Card>
  )
}

export default CardColaboracion