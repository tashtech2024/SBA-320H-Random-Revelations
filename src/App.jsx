import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form';
import FactDisplay from './components/FactsDisplay';

function App() {
  const api = "https://meowfacts.herokuapp.com/?count=3"
  const [FactsData, setFact] = useState(null);
  const getFact = async () => {
    try {
      const res = await fetch(api)

      const data = await res.json();
      console.log(data.data);
      setFact(data.data)
}catch (error){
  console.log(error);
}
}

useEffect(() => {
  getFact('')
}, [])

  return (
    <>
      <h1>SBA 320H Random Revelations</h1>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMV66k3GRupi8_jVOGb2__jAbl4P4kxe3HZg&s" alt="Girl in a jacket" width={500} height={600} />

      <Form factsearch/>
      {FactsData ? <FactDisplay fact ={FactsData}/> : ""}
    </>
  )
}

export default App
