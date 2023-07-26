import React  from 'react'
import { useCustomContext } from './ContextManager/ContextProvider'
import { Homepage , DetailPage, ContactPage, CarritoPage,  } from './screens'
import { Route , Routes } from 'react-router-dom'
import { NavBar } from './components'


function App() {

  const {  } = useCustomContext()

  return (
    <>
    <NavBar/>



      <Routes>

        <Route path='/' element={<Homepage />}/>
        <Route path='/detail/:id' element={<DetailPage />}/>
        <Route path='/contact' element={<ContactPage/>}/>
        <Route path='/carrito' element={<CarritoPage/>}/>
        
      </Routes>
      

    </>
  )
}

export default App
