
import { Paths } from '@/models/type.js'

export const routes:Paths[] = [
  {
    path:'/',
    element: ()=> import('../pages/App.tsx'),
  },
  {
    path:'/login',
    element:()=> import('../pages/Login.tsx'),
  },
  {
   path:'/admin',
    element:()=> import('../pages/Admin.tsx'),
  },
  {
    path:'/admin/gestion',
    element:()=> import('../pages/Gestion.tsx')
  },
  {
    path:'/admin/negociacion',
    element:()=> import('../pages/Negociacion.tsx')
  },
  {
    path:'/admin/colaboracion',
    element:()=> import('../pages/Colaboracion.tsx')
  },
  {
   path:'/service',
    element:()=> import('../pages/Service.tsx'),
  },
  {
   path:'/about',
    element:()=> import('../pages/About.tsx'),
  },
  {
   path:'/register',
    element:()=> import('../pages/Register.tsx'),
  },
  {
   path:'/pagos',
    element:()=> import('../pages/pagoForm.tsx')
  },
]