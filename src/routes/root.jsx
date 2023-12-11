import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import NavBar from "../components/NavBar/NavBar";
import WriteBlogs from "../components/writeBlogs/writeBlogs";
const router = createBrowserRouter([
  {
    path: "/Navbar",
    element: <NavBar />,
   
  },
  {
    path: "/",
    element: <Blogs />,
  },
  {
    path:"/writeBlogs",
    element: <WriteBlogs/>  ,
  }
   
 
 
  ]);
  export default router;