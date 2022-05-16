import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const user = false;

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default RequireAuth;