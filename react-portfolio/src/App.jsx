import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Header from './components/Header/Header';

function App() {
  // [ variable, methodToUpdateVaraiable ]  = useState(initialDataState)
  const [count, setCount] = useState(0);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");

   const [user, serUser] = useState({
    first: "",
    last: "",
    age: ""
  }) 
 // let count = 0;
 // setCount(5);   // --> count = 5

//  const handleClick = () => {
//    setCount(prev => prev + 1);
// }


  return (
    <>
      <div className="app-wrapper">
        <h1>I am in the APP component</h1>
        <Header />
        <Header />
        <Header />
      </div>
    </>
  )
}

export default App
