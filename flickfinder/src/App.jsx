import { Navbar , Hero } from "./components";

function App() {
  
  return (
    <div className="font-poppins" >
      <div className=" absolute top-0 left-0">
        <Navbar/>
      </div>

      <Hero />
      
    </div>
  )
}

export default App;
