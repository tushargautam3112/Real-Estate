import { listPageLoader, profilePageLoader } from "./lib/loader";
import Home from "./routes/homePage/Home";

import {Layout, RequireAuth}  from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";
import Register from "./routes/register/Register";
import Login from "./routes/loginPage/Login";
import Profilepage from "./routes/profile/Profilepage";
import SinglePage from "./routes/singlePage/SinglePage";

import{
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout />,
            children:[
                {
                    path : "/",
                    element: <Home/>,
                },
                {
                    path: "/list",
                    element: <ListPage />,
                    loader : listPageLoader ,
                },
                {
                    path: "/register",
                    element: <Register/>
                },
                {
                    path: "/login",
                    element: <Login/>
                },
                {
                    path: "/:id",
                    element: <SinglePage />,
                },
            ]
        },
        {
            path:"/",
            element:<RequireAuth/>,
            children:[
                {
                    path: "/profile",
                    element: <Profilepage/>,
                    loader : profilePageLoader ,
                }
            ]
        }
      ]);


    return (
    <RouterProvider router={router} />
    );
}

export default App
