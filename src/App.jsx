
import './App.css'
import Home from './Component/Home'
import {Routes , Route ,BrowserRouter} from 'react-router-dom'
import About from './Component/About'
import Navbar from './Component/Navbar'
import Login from './Component/Login'
import Signup from './Component/Signup'


function App() {
 
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About}/>
        <Route path="/login" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
