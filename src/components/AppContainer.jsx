import React from "react";
import About from "./About";
import Feed from "./Feed";
import Profile from "./Profile";
import Followers from "./Followers";

function AppContainer(){
  let mainBox = {
    padding: '10px',
    border: 'solid 1px grey',
    margin: '10px',
    flexGrow: '1'
  }
  let grow = {
    flexGrow: '1'
  }
  return (
    <div style={{display: 'flex'}}>
      <div style={grow}>
        <div style={mainBox}><Profile/></div>
        <div style={mainBox}><About/></div>
      </div>
      <div style={mainBox}><Feed/></div>
      <div style={mainBox}><Followers/></div>
    </div>
  );
}

export default AppContainer;
