import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import About from "./components/About";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
    return (
        <Provider store={appStore}>
            <div className="App min-h-screen flex flex-col px-4 sm:px-6 md:px-10 xl:px-20">
                <Header />
                <main className="flex-grow body-container mt-4">
                    <Outlet />
                </main>
            </div>
        </Provider>
    );
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <LoginForm />,
            },
            {
                path: "/home",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/help",
                element: <Help />,
            },
            {
                path: "/login",
                element: <LoginForm />,
            },
            {
                path: "/signup",
                element: <SignupForm />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("item"));
root.render(<RouterProvider router={appRouter} />);