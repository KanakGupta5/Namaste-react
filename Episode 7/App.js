import React from 'React';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './src/components/Error';
import About from './src/components/About';
import ContactUs from './src/components/ContactUs';
import RestaurantMenu from './src/components/RestaurantMenu';
import Login from './src/components/Login'

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
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            },
            {
                path: '/restaurant-menu/:id',
                element: <RestaurantMenu />
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
]);

const rootEle = ReactDOM.createRoot(document.querySelector("#root"));
rootEle.render(<RouterProvider router={appRouter} />);