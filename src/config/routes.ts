import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import About from "../pages/About"

interface RouteType {
    path: string,
    component: ()=> JSX.Element,
    name: String
}

const routes: RouteType[]= [
    {
        path: "",
        component: Home,
        name: "Home Screen",
    },
    {
        path: "/about",
        component: About,
        name: "About",
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "Dashboard",
    }
];

export default routes
