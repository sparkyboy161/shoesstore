import React from 'react'

import AdminRoute from './AdminRoute';
import ClientRoute from './ClientRoute';

export default function RootRoute({ user }) {
    return (
        <>
            <ClientRoute />
            {user && <AdminRoute />}
        </>
    )
}
