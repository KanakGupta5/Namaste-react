import ReactDOM from 'react-dom/client';
import Header from './Episode 12/src/components/Header';
import Body from './Episode 12/src/components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './Episode 12/src/components/Error';
import About from './Episode 12/src/components/About';
import ContactUs from './Episode 12/src/components/ContactUs';
import RestaurantMenu from './Episode 12/src/components/RestaurantMenu';
import { Suspense, lazy, useEffect, useState } from 'react';
import UserContext from './Episode 12/src/util/UserContext';
import { Provider } from 'react-redux';
import appStore from './Episode 12/src/util/appStore';
import Cart from './Episode 12/src/components/Cart';

//************************************************   LAZY LOADING    ************************************************
const Grocery = lazy(() => import("./Episode 12/src/components/Grocery"));
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
            }
        ]
    }
]);

const rootEle = ReactDOM.createRoot(document.querySelector("#root"));
rootEle.render(<RouterProvider router={appRouter} />);