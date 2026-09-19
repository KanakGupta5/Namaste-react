import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './src/components/Error';
import About from './src/components/About';
import ContactUs from './src/components/ContactUs';
import RestaurantMenu from './src/components/RestaurantMenu';
import { Suspense, lazy, useEffect, useState } from 'react';
import UserContext from './src/util/UserContext';
import { Provider } from 'react-redux';
import appStore from './src/util/appStore';
import Cart from './src/components/Cart';
// import Pokemon from './Episode 12/src/components/Pokemon';

//************************************************   LAZY LOADING    ************************************************
const Grocery = lazy(() => import("./src/components/Grocery"));

const Pokemon = lazy(() => import("./src/components/Pokemon"));
//<Suspense fallback={<h1>Loading Grocery Page. Please wait</h1>}>

//************************************************   set react context **********************************************


const AppLayout = () => {
    const [userName, setUserName] = useState(null); 

    useEffect(() => {
        setUserName("Kanak"); //let say we get it from some API
    }, [])


    return <>
        {/* using provider from react-redux */}
        <Provider store={appStore}>
        {/* //setUserName will update the userName on fly */}
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            {/* // loggedInUser will be value of userName */}
            <div className="m-auto max-w-full w-full bg-gray-100">
                <UserContext.Provider value={{ loggedInUser: "Kanak Gupta" }}>
                    {/* // loggedInUser will be "Kanak Gupta" */}
                    <Header />
                </UserContext.Provider>
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    </>
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
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
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/pokemon',
                element: <Suspense fallback={<h1>Loading! Please wait. </h1>}><Pokemon /></Suspense>
            }
        ]
    }
]);

const rootEle = ReactDOM.createRoot(document.querySelector("#root"));
rootEle.render(<RouterProvider router={appRouter} />);