import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form';
import FactDisplay from './components/FactsDisplay';
// import NavBar from './components/NavBar'

function App() {
  const api = "https://meowfacts.herokuapp.com/?count=1"
  const [FactsData, setFact] = useState(null);
  const getFact = async () => {
    try {
      const res = await fetch(api)

      const data = await res.json();
      console.log(data.data);
      setFact(data.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFact('')
  }, [])

  return (
    <>
   {/* <NavBar/> */}
      <h1>SBA 320H "Purr-fect Facts"</h1>

      <img src="public/Free-Logo-Maker-Get-Custom-Logo-Designs-in-Minutes-Looka (2)purrfect.png" alt="Purr-fect Logo" width={500} height={600} />
      
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMV66k3GRupi8_jVOGb2__jAbl4P4kxe3HZg&s" alt="Grey and white cats" width={500} height={600} />

      <Form factsearch />
      {FactsData ? <FactDisplay fact={FactsData}
        getFact={getFact} /> : ""}

        
    </>
  )
}

export default App
