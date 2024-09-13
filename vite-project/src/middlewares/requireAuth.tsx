import { useSession } from './sessionProvider';
import { Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
  const { isAuthenticated } = useSession(); // Accede a la autenticación desde el contexto

  // Si no está autenticado, redirige al login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Si está autenticado, permite el acceso a las rutas protegidas
  return <Outlet />;
};

export default RequireAuth;
