import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home , Details , Aboutus , Searchresults } from './pages'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/details/:type/:id' element={<Details/>} />
        <Route path='/about' element={<Aboutus/>} />
        <Route path='/search/:query' element={<Searchresults/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
