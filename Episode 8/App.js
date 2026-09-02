// import React from 'React';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './src/components/Error';
import About from './src/components/About';
import ContactUs from './src/components/ContactUs';

const AppLayout = () => {
    return <>
        <div className="app-layout">
            <Header/>
            <Outlet/>
        </div>
    </>
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <About />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            }
        ]
    }
]);

const rootEle = ReactDOM.createRoot(document.querySelector("#root"));
rootEle.render(<RouterProvider router={appRouter} />);