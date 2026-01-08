import react, {useState} from 'react';
import Greetings from './components/Greetings';
import UserInput from './components/UserInput';

import './App.css'


function App() { // parent 

  const [userName, setUserName] = useState('Jane')

  const [value, setValue] = useState(1);

  const updateValue = () => {
    console.log('update value');
    const newValue = value * 2;
    setValue(newValue);
  }
  
  // effect or side effect 

  // state
  // effect
  // Hooks - allows changes the state as well running effect 

  // rendering 
  return (
    <>
      <UserInput setUserName={setUserName}/>
      <Greetings name={userName} greeting={'Have a nice day'}/>
      <p>Current Value: {value}</p>
      <button onClick={updateValue}> Update The Value</button>
      {/* <Greetings name={'Jane'} greeting={'Have a nice week'}/>
      <Greetings name={'Jill'} greeting={'Have a nice month'}/> */}
    </>
  )
}

export default App
