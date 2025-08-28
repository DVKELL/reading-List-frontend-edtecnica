import { useState } from 'react'
import ListBooks from './components/List.jsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import  Form  from './components/Form.jsx';
import './index.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/form' element= {<Form/>}/> */}
      <Route path='/' element= {<ListBooks/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
