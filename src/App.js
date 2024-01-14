import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">


<LoadApi></LoadApi>




    </div>
  );
}

function LoadApi() {

  const [users,setUser]=useState([]);
  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
  },[])

  return (
   <div>
    {
      users.map(user =><User name={user.name}></User>)
    }
     
   </div>
  );
}

function User(props){
  return (
    <div>
      <h1>Name:{props.name}</h1>
    </div>
  )
}

export default App;
