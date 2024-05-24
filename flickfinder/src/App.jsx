import Getpopular from "./components/Getpopular"


function App() {

  let data = Getpopular();
  
  return (
    <>
    <div className="text-3xl font-bold font-sans">
      Hello there.
    </div>
    </>
  )
}

export default App
