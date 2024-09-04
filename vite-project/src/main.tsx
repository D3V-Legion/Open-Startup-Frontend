import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import AppRouter from './AppRouter.tsx'
import { ThemeProvider } from './components/theme-provider.tsx'



const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                  <AppRouter/>
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
)
