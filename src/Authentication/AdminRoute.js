import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AdminRoute = () => {
    const location = useLocation();
    const user = false;

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    return <Outlet />;
};

export default AdminRoute;