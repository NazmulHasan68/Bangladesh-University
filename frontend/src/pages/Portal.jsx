import React, { useState } from 'react';
import PortalSidebar from '../components/pages Component/Portal.component/PortalSidebar';
import PortalmainContent from '../components/pages Component/Portal.component/PortalmainContent';
import Navigation from '../components/generallComponent/Navigation';
import { Outlet } from 'react-router-dom';

export default function Portal() {
    return (
        <div>
            <Navigation/>
            <div className="flex mt-14 md:mt-20">
                <PortalSidebar/>
                <Outlet/>
            </div>
        </div>
    );
}
