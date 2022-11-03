
import React from "react";
import './App.css'
import{connect, getbalance, Accountinfo} from "./App.js"




function App() {
    return (
        
      <div className="App">
      <div className="nav">
      <img className=""src={require('./circle.jpg')} />
      <div className="link">
      <a href="https://saucerswap.finance/swap" >Swap</a>
       <a>Farm</a>
       <a>Bridge</a>
   

      </div>
      </div>
      <div className="con">
          <button onClick={connect} className="connect" id="connect">Connect Wallet</button>

        </div>

      <div className="text">
          <input placeholder="Paste Your Account ID" type="text" name="" id="input" />
      </div>
      <div className="text1">
      <button onClick={getbalance} className="get" id="get">Check Balance</button>
      
      </div>

<div className="close" id="close">

</div>
<div className="close1" >
<h1>Helium </h1>
<p className="t">
     Helium is a Community Driven Project with the aim of providing a Utility for Hedera.
</p>
 <p className="j"> 
     join our Community
  
 </p>
 <a href="https://twitter.com/Heliumhts?s=20&t=V2x3KdoJZK55Y7OMgRLjPA">
 <img className="twitter"src={require('./TwitterY.png')} />
 </a>
 <a href="https://discord.gg/bFRGUwmRGG">
 <img className="twitter"src={require('./DiscordY.png')} />
 </a>
</div>
{/* <div className="social">
<img className=""src={require('./TwitterY.png')} />
</div> */}

       </div>  
       
    );
  }



  export default App;
  
  