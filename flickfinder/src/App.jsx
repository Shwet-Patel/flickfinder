import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home , Details , Aboutus } from './pages'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:id' element={<Details/>} />
        <Route path='/about' element={<Aboutus/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
