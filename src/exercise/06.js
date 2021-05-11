// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
import {useState} from 'react'
import {useRef} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = useState(null)
  //const [error, setError] = useState(null)
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  const handleSubmit = e => {
    e.preventDefault()
    //onSubmitUsername(e.target.elements[0].value)
    onSubmitUsername(inputEl.current.value)
  }

  const handleChange = e => {
    const value = inputEl.current.value
    setUsername(value.toLowerCase())
  }
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const inputEl = useRef(null)
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          ref={inputEl}
          onChange={handleChange}
          value={username}
        />
      </div>
      <button disabled={!username} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
