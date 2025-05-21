import React , {useState}from 'react'

const App = () => {
  const [notes , setNotes]= useState("")
  const [summarizedNotes, setSummarizedNotes] = useState(null)
  async function generateAINotes(){
    const response = await fetch("http://localhost:5000/ai",{
      method: 'POST',
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({notes:notes})
    })
    if (response.ok){
      const data= await response.json()
      setSummarizedNotes(data)
    }
  }

  return (
    <>
    <div>
      <h3>AI Notes summarizer</h3>
      <textarea 
        onChange= {(e)=>{
        setNotes(e.target.value);
        }}
        rows= {25}
        cols= {50}
      ></textarea>
      <br/>
      <button onClick={generateAINotes}>Summarize Notes</button>
      <div>{summarizedNotes != null ? (<p>{summarizedNotes}</p>) : null}</div>
    </div>
    </>
  )
}

export default App