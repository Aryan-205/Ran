import { useState } from 'react'
import axios from 'axios'

function App() {

  const [jokes, setJokes] =useState('')

  
  async function getJokes(){
    await axios.get("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((response)=>{
        setJokes(response.data.joke)
      })
  }

  return (
    <>
      <div className='shadow-2xl grid text-center justify-center p-8 bg-white rounded-lg'>
        <h1 className='font-semibold text-3xl'>GENERATE A JOKE</h1>
        <button className='my-4 p-2 bg-green-500 rounded-xl w-40 place-self-center' onClick={getJokes}>Click me!</button>
        <h3 className='bg-black text-white text-lg mt-4 rounded-lg p-4'>{jokes}</h3>
      </div>
    </>
  )
}

export default App
