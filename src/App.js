import React,{useState}from "react"
import './App.css';

function App() {
  const[search,setSearch]=useState("")
  return (
    <div className="App">
      <div className="nav__bar">
        <div className="navbar__left">
          <h1>TrulyCourse</h1>
        </div>
        <div className="navbar__right">
          <h3>Logout</h3>
        </div>
      </div>
     <div className="search__bar">
       <form>
         <input type="text"placeholder="Type here to search" value={search} onChange={(e)=>setSearch(e.target.value)}></input>
         <button className="searchbar__button">Search</button>
       </form>
     </div>
     <div className="course__cards">
       <center>

       <img src="angular.png"></img>
       <img src="react.png"></img>
       <img src="node.png"></img>
       <img src="mongo.png"></img>
       <br/><br/>
       <img src="sql.png"></img>
       <img src="spring.png"></img>
       </center>

     </div>
     
    </div>
  );
}

export default App;
