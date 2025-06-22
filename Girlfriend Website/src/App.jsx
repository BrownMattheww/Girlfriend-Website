import './App.css'
import { useState } from 'react'

function App() {

  function passwordCheck() {
    const correctPassword = "daisy";
    const enteredPassword = document.getElementById("password").value;

    if(correctPassword != enteredPassword) {
      alert("Password is incorrect!");
    } else if (correctPassword == enteredPassword){
      alert("Password is correct!")
    } else {
      alert("Please enter a valid password")
    }
  }

  return (
    <>
    <div id='container'>
      <h1>Enter the password</h1>
      <form>
        <label htmlFor="password"></label>
        <input placeholder = "Enter Password" type="password" id='password'/>
        <button id="passwordCheck" onClick={passwordCheck}> Go! </button>
      </form>
    </div>
    </>
  )
}

export default App
