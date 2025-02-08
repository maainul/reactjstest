import { useState } from 'react'
import './App.css'
import { Axios } from './Components/Axios'
import { ControlledInputField } from './Components/ControlledInputField'
import { Counter } from './Components/Counter'
import { FetchApi } from './Components/FetchApi'
import { FormSubmission } from './Components/FormSubmission'
import { LocalStorage } from './Components/LocalStorage'
import { ToggleButton } from './Components/ToggleButton'
import { useTheme } from './Context/ThemeContext'

function App() {

  const { isDarkMode, toggleTheme } = useTheme();


  return (
    <>
      <div className={isDarkMode ? 'dark-mode':'light-mode'}>
        <Counter />
        <ToggleButton />
        <FetchApi />
        <Axios />
        <ControlledInputField />
        <FormSubmission />
        <LocalStorage />
        <button onClick={toggleTheme}>{isDarkMode ? 'Switch to Light Mode':'Switch to Dark Mode'}</button>
      </div>
    </>
  )
}

export default App
