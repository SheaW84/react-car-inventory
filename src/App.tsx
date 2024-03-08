import { HashRouter, Route, Routes, Link } from "react-router-dom"
import routes from "./config/routes"
import Navbar from "./components/Navbar"
import AuthChecker from './auth/AuthChecker'

function App() {

  return (
   <HashRouter>
    <Navbar/>
      <Routes>
        { routes.map((route: any, index: any) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.protected ? (
              <AuthChecker>
                <route.component/>
              </AuthChecker>
              ) : (
                <route.component/>
              )
            }
          />
        ))}

      </Routes>

   </HashRouter>
  )
}

export default App
