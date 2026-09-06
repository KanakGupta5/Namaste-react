import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './src/components/Error';
import About from './src/components/About';
import ContactUs from './src/components/ContactUs';
import RestaurantMenu from './src/components/RestaurantMenu';
// import Grocery from './src/components/Grocery';
import {Suspense, lazy} from 'react';

//************************************************   LAZY LOADING    ************************************************
const Grocery = lazy(() => import("./src/components/Grocery"));
//<Suspense fallback={<h1>Loading Grocery Page. Please wait</h1>}>

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
                path: '/grocery',
                element: <Suspense fallback={<h1>Loading! Please wait. </h1>}><Grocery /></Suspense>
                //************************************************   LAZY LOADING    ************************************************
            },
            {
                path: '/restaurant-menu/:id',
                element: <RestaurantMenu />
            }
        ]
    }
]);

const rootEle = ReactDOM.createRoot(document.querySelector("#root"));
rootEle.render(<RouterProvider router={appRouter} />);