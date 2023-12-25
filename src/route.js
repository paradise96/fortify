import { createHashRouter } from "react-router-dom";
import App from "./App";
import NotFound from './components/NotFound'

const router = createHashRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;