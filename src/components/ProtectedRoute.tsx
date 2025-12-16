
import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
    const session = localStorage.getItem('adminSession');

    if (!session) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};
