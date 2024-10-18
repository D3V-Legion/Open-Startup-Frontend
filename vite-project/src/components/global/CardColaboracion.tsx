import React from 'react'
import { Card } from '../ui/card'

const CardColaboracion = () => {
  return (
    <Card className='bg-foreground text-background p-6'>
        <h3 className='font-bold'>Agregar barra de búsqueda</h3>
        <p>Debemos agregar una barra de búsqueda para filtrar tareas según el contenido de las tarjetas.</p>
        <div className="iconos flex w-100 gap-4 mt-2">
            <div className="icono flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 2048 2048"><path  d="M1330 1203q136 47 245 131t186 196t118 243t41 275h-128q0-164-58-304t-162-244t-243-161t-305-59q-107 0-206 27t-184 76t-155 119t-119 155t-77 185t-27 206H128q0-144 42-275t119-242t186-194t245-133q-78-42-140-102T475 969t-67-157t-24-172q0-133 50-249t137-204T774 50t250-50q133 0 249 50t204 137t137 203t50 250q0 88-23 171t-67 156t-105 133t-139 103M512 640q0 106 40 199t110 162t163 110t199 41t199-40t162-110t110-163t41-199t-40-199t-110-162t-163-110t-199-41t-199 40t-162 110t-110 163t-41 199"/></svg>
              Francisco</div>
            <div className="icono flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 16"><path fill-rule="evenodd" d="M13 2h-1v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H6v1.5c0 .28-.22.5-.5.5h-2c-.28 0-.5-.22-.5-.5V2H2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 12H2V5h11v9zM5 3H4V1h1v2zm6 0h-1V1h1v2zM6 7H5V6h1v1zm2 0H7V6h1v1zm2 0H9V6h1v1zm2 0h-1V6h1v1zM4 9H3V8h1v1zm2 0H5V8h1v1zm2 0H7V8h1v1zm2 0H9V8h1v1zm2 0h-1V8h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1zm2 0h-1v-1h1v1zm-8 2H3v-1h1v1zm2 0H5v-1h1v1zm2 0H7v-1h1v1zm2 0H9v-1h1v1z" /></svg> 23 sep</div>
            <div className="icono flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="#000" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="m8.5 12.5l2 2l5-5"/><path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"/></g></svg> 0/6</div>
            <div className="icono flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-2 -2 24 24"><path  d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-13a1 1 0 0 1 1 1v5a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1m0 10a1 1 0 1 1 0-2a1 1 0 0 1 0 2"/></svg>
              Alta</div>
        </div>
    </Card>
  )
}

export default CardColaboracion