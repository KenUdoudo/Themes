

function App() {
  

  return (
    <div className='flex flex-col justify-center items-center mt-40'>
      <h2 className="font-semibold text-3xl">Themes in React</h2>
      <p className="text-xl text-center px-40 mx-20">This is an example of how to make themes in React application. Watch my new video to see  how to do this the easy way.</p>
      <p>Example contains React with Typescript, Context API and React Hooks.</p>

      <div className="flex flex-row gap-x-5 mt-4">
        <button className="border-2 bg-white border-purple-600">Light Theme</button>
        <button>Dark Theme</button>
      </div>
    </div>
  )
}

export default App
