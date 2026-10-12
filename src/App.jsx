import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <>
     {/* <Provider> */}
        <Router basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </Router>
    {/* </Provider> */}

    </>
  )
}

export default App


