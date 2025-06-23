import '../index.css'
import { useNavigate } from 'react-router-dom';

export default function PasswordGate() {

  const navigate = useNavigate();

  function passwordCheck() {
    const correctPassword = "daisy";
    const enteredPassword = document.getElementById("password").value;

    if(correctPassword != enteredPassword) {
      alert("Password is incorrect!");
    } else if (correctPassword == enteredPassword){
      alert("Password is correct!")
      navigate("/home")
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
