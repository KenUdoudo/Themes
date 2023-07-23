import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <div className='flex flex-col'>
      <h2>Themes in React</h2>
      <p>This is ane example of how to make themes in React application. Watch my new video to see  how to do this the easy way.</p>
      <p>Example contains React with Typescript, Context API and React Hooks.</p>

      <div>
        <button>Light Theme</button>
        <button>Dark Theme</button>
      </div>
    </div>
  )
}

export default App
