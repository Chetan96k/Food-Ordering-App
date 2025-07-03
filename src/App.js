import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="body-container">
                <Outlet />
            </div>
        </div>
    )
}

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
        ],
        errorElement: <Error />,
    },
])

const root = ReactDOM.createRoot(document.getElementById("item"));

root.render(<RouterProvider router={appRouter} />);