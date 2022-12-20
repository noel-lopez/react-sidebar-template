import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from '../pages/Home'
import {Products} from '../pages/Products'
import {Users} from '../pages/Users'

export function MyRoutes() {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/users' element={<Users />}/>
      </Routes>
  )
}