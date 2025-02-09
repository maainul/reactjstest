import React, { Suspense, useState } from 'react'
import './App.css'
import { Axios } from './Components/Axios'
import { ControlledInputField } from './Components/ControlledInputField'
import { Counter } from './Components/Counter'
import { FetchApi } from './Components/FetchApi'
import { FormSubmission } from './Components/FormSubmission'
import { LocalStorage } from './Components/LocalStorage'
import { ToggleButton } from './Components/ToggleButton'
import { useTheme } from './Context/ThemeContext'
import { DebounceInput } from './Components/DebounceInput'
import ReactMemo from './Components/ReactMemo'
import ChildComponent from './Components/ChildComponent'

const Dashboard = React.lazy(() => import('./Components/Dashboard'));


function App() {

  const { isDarkMode, toggleTheme } = useTheme();
  const [showDashboard, setShowDashboard] = useState(false);


  const [count,setCount] = useState(0)
  const [name,setName] = useState('John')



  return (
    <>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <Counter />
        <ToggleButton />
        <FetchApi />
        <Axios />
        <ControlledInputField />
        <FormSubmission />
        <LocalStorage />
        <button onClick={toggleTheme}>{isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
        <DebounceInput />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setShowDashboard(!showDashboard)}
        >
          {showDashboard ? 'Hide' : 'Show'} Dashboard
        </button>

        {/* Suspense handles the loading state while the Dashboard is being loaded */}
        {showDashboard && (
          <Suspense fallback={<div>Loading Dashboard...</div>}>
            <Dashboard />
          </Suspense>
        )}
        <ReactMemo />

        <button onClick={()=>setCount(count+1)}>Increment Count</button>
        <button onClick={()=>setName(name === 'John' ? 'Jane':'John')} >Change Name</button>

        <p>Count :{count}</p>

        <ChildComponent name={name} />
      </div>
    </>
  )
}

export default App
