import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <Suspense>
            <Outlet></Outlet>
        </Suspense>
    </>
  )
}

export default MainLayout