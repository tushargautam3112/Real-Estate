import Home from "./routes/homePage/Home";
import Layout from "./routes/layout/layout";
import listPage from "./routes/listPage/listPage";
import singlePage from "./routes/singlePage/singlePage";

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
                    element: <Home />
                },
                {
                    path: "/list",
                    element: <listPage />
                },
                {
                    path: "/:id",
                    element: <singlePage />
                }
            ]
        }
      ]);


    return (
    <RouterProvider router={router} />
    );
}

export default App
