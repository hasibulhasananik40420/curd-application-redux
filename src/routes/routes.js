import { createBrowserRouter } from "react-router-dom";
import Addbooks from "../featuers/books/Addbooks";
import BooksView from "../featuers/books/BooksView";
import EditBook from "../featuers/books/EditBook";
import Main from "../layout/Main";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/showbook",
                element: <BooksView />,
            },
            {
                path: "/addbook",
                element: <Addbooks />,
            },
            {
                path: "/editbook",
                element: <EditBook />,
            },
        ]



    }
]);

export default routes