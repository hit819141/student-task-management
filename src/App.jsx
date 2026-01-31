import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

function App() {
  const route = createBrowserRouter([
    {
      path:'/login',
      element:<Login />
    },
    {
      path: '/register',
      element:<Register/>
    }
  ])
  return <RouterProvider router={route}/>
}

export default App