import React from 'react'

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button
      onClick={() => setDarkMode(!darkMode)} name='toggle'>
      {darkMode ? "light" : "dark"}
    </button>
  )
}

export default DarkModeToggle
