import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddCraft from "../pages/AddCraft/AddCraft";
import MyCraft from "../pages/MyCraft/MyCraft";
import ProtectedRoutes from "../ProtectedRoutes/ProtectedRoutes";
import CraftItemDetails from "../pages/CraftItemDetails/CraftItemDetails";
import UpdateCraft from "../pages/UpdateCraft/UpdateCraft";
import AllCrafts from "../pages/AllCrafts/AllCrafts";
import AllCraftDetails from "../pages/AllCrafts/AllCraftDetails";
import CategoriesDetails from "../pages/Categories/CategoriesDetails";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addCraft',
        element: <ProtectedRoutes><AddCraft></AddCraft></ProtectedRoutes>
      },

      {
        path: '/myCraft',
        element: <ProtectedRoutes><MyCraft></MyCraft></ProtectedRoutes>
      },

      {
        path: '/crafts/:id',
        element: <ProtectedRoutes><CraftItemDetails></CraftItemDetails></ProtectedRoutes>,
        loader: ({ params }) => fetch(`https://eco-krafts-server.vercel.app/crafts/${params.id}`)
      },
      {
        path: '/myCraft/:id',
        element: <ProtectedRoutes><UpdateCraft></UpdateCraft></ProtectedRoutes>,
        loader: ({ params }) => fetch(`https://eco-krafts-server.vercel.app/myCraft/${params.id}`)

      },
      {
        path: '/allCrafts',
        element: <AllCrafts></AllCrafts>,
        loader: () => fetch('https://eco-krafts-server.vercel.app/crafts')
      },
      {
        path: '/craft/:id',
        element: <ProtectedRoutes><AllCraftDetails></AllCraftDetails></ProtectedRoutes>,
        loader: ({ params }) => fetch(`https://eco-krafts-server.vercel.app/craft/${params.id}`)
      },
      {
        path: '/categories/:subCategory',
        element: <CategoriesDetails></CategoriesDetails>,
        loader: ({ params }) => fetch(`https://eco-krafts-server.vercel.app/categories/${params.subCategory}`)
      }


    ]
  },
]);


export default router;