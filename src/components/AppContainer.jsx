import React from "react";
import About from "./About";
import Feed from "./Feed";
import Profile from "./Profile";
import Followers from "./Followers";

function AppContainer(){
  return (
    <div>
      <About/>
      <Feed/>
      <Profile/>
      <Followers/>
    </div>
  );
}

export default AppContainer;
