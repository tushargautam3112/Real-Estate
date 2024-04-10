import Home from "./routes/homePage/Home";
// import Home form "../routes/layout/Home";
import Layout from "./routes/layout/Layout";
import ListPage from "./routes/listPage/ListPage";
<<<<<<< HEAD
import Register from "./routes/register/Register";
import SinglePage from "./routes/singlePage/SinglePage";
import Login from "./routes/loginPage/Login";

=======
import Profilepage from "./routes/profile/Profilepage";
import SinglePage from "./routes/singlePage/SinglePage";
>>>>>>> 4564124437e36ca1ba13564a2491234e015db6f5
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
                    element: <Home/>
                },
                {
                    path: "/list",
                    element: <ListPage />
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
                    element: <SinglePage />
                },
                {
                    path: "/profile",
                    element: <Profilepage/>
                }
            ]
        }
      ]);


    return (
    <RouterProvider router={router} />
    );
}

export default App
