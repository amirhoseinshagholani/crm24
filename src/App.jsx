import { RouterProvider } from "react-router-dom"
import Login from "./features/components/Login"
import { router } from "./router"


function App() {
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
