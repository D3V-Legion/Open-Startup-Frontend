import CardColaboracion from '@/components/global/CardColaboracion'
import { Button } from '@/components/ui/button'
import React from 'react'

const Colaboracion = () => {
  return (
    <main className='mx-8'>
      <div className="botones-header my-6 flex gap-6 w-100 justify-center">
        <Button className='bg-[#56B889] text-white hover:bg-[#00A26B]'>Calendario</Button>
        <Button variant={'outline'}>Documentos</Button>
        <Button variant={'outline'}>Equipos</Button>
      </div>
      <div className="side">

      </div>
      <div className="parte-central flex gap-4">
        <CardColaboracion/>
        <CardColaboracion/>
        <CardColaboracion/>
      </div>
    </main>
  )
}

export default Colaboracion