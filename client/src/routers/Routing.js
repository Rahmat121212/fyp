import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from "../components/Home"
const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}  />
        <Route path="auth" >
            <Route path="dashboard" element={<Home/>} />
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing