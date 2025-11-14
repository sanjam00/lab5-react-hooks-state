import React from 'react'
import App from '../App'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic
  // function handleClick() {
  //   setDarkMode(!darkMode)
  // }

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}>
      Toggle {darkMode ? "light" : "dark"}
    </button>
  )
}

export default DarkModeToggle
