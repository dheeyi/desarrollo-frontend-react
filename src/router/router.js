import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";

import App from "../App";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
        ]
    }
]);

export default routes;