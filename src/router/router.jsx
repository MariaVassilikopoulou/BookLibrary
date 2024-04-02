import { createBrowserRouter } from "react-router-dom";
import AllTheBooks from "../pages/AllTheBooks";

import SelectedBook from "../pages/SelectedBook";

const router= createBrowserRouter(
    [{path: '/',
    element: <AllTheBooks/>},
    {
        path: '/book/:id',
        element:<SelectedBook/>
    }

    ]
);
export default router;