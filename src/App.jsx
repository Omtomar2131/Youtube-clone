import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Watch from './Pages/Watch'
import Search from './Pages/Search'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/watch/:id' element={<Watch/>}/>
    </Routes>
    </BrowserRouter>
  )
}
