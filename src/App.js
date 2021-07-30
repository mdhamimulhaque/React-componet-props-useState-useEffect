import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //const users =[{name:"Tamal",age:18},{name:"Himel",age:22},{name:"Arman",age:27},{name:"Pranto",age:24}];

  const [userInfo, setUserInfo] = useState([]);
    useEffect(()=>{
     fetch("https://jsonplaceholder.typicode.com/users")
     .then(res => res.json())
     .then(data => setUserInfo(data))
},[])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       {
         userInfo.map(user => <MyUser name={user.name} id={user.id} email={user.email} website={user.website} phone={user.phone}></MyUser> )
       }
       
       
       <TozbiCount></TozbiCount>
      </header>
    </div>
  );
}

function TozbiCount(){
const [add,setAdd] = useState(0);
const tozbiAdded = () => setAdd(add + 1);

  return(
    <div>
      <h6>Name :</h6>
      <h4>Total : {add}</h4>
      <button onClick={tozbiAdded}>Add Value</button>
      <LikeCounter like={add}></LikeCounter>
    </div>
  )
}


function LikeCounter(props){

  return(
    <h4>Total Likes : {props.like + 100} </h4>
  )
}

function MyUser(props){
  const myDiv={
  backgroundColor:"red",
  padding:"10px",
  margin:"10px",
  borderRadius:"10px",
}
  const myInsideDiv={
  backgroundColor:"skyblue",
  padding:"10px",
  margin:"10px",
  borderRadius:"10px",
}


   return(
     <div style={myDiv}>
       <h5>Name: {props.name}</h5>
       <h6>id: {props.id}</h6>
      
       <div style={myInsideDiv}>
         <h6>Website: {props.website}</h6>
         <h6>Email: {props.email}</h6>
         <h6>Phone: {props.phone}</h6>
       </div>
     </div>
   )

}

export default App;
