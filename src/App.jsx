import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
function App() {
  const ThemedCompoment = () =>{
    const {theme, toggleLight, toggleDark} = useContext(ThemeContext);
  }

  return (
    <div className='flex flex-col justify-center items-center mt-40'>
      <h2 className="font-semibold text-3xl text-purple-600">Themes in React</h2>
      <p className="text-xl text-center px-40 mx-20 text-purple-400">This is an example of how to make themes in React application. Watch my new video to see  how to do this the easy way.</p>
      <p className="text-purple-200">Example contains React with Typescript, Context API and React Hooks.</p>

      <div className="flex flex-row gap-x-5 mt-4">
        <button className="border-2 bg-white border-purple-600 rounded-xl px-3">Light Theme</button>
        <button className="border-2 bg-gray-700 border-purple-600 rounded-xl px-3 text-white">Dark Theme</button>
      </div>
    </div>
  )
}

export default App
