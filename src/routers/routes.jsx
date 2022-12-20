import { Routes, Route } from 'react-router-dom';
import {Home} from '../pages/Home'
import {Products} from '../pages/Products'
import {Users} from '../pages/Users'
import {Graphs} from '../pages/Graphs'
import {Charts} from '../pages/Charts'
import {Settings} from '../pages/Settings'
import {Exit} from '../pages/Exit'

export function MyRoutes() {
  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/graphs' element={<Graphs />}/>
        <Route path='/charts' element={<Charts />}/>
        <Route path='/settings' element={<Settings />}/>
        <Route path='/exit' element={<Exit />}/>
      </Routes>
  )
}