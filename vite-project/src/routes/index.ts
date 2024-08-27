
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
  }
]