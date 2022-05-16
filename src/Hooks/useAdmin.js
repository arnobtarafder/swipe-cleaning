import React, { useState } from 'react';

const useAdmin = () => {
    const [admin, useAdmin] = useState(true);

    return ([admin]);
};

export default useAdmin;