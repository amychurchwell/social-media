import React from "react";

function Header(){
  let mainHeader = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
  let leftHeader = {
    display: 'flex',
    padding: '10px',
    border: 'solid 1px grey'
  }
  let rightHeader = {
    display: 'flex',
  }

  return (
    <div style={mainHeader}>
      <div style={leftHeader}>
        <div>Home</div>
        <div>Notifications</div>
        <div>Messages</div>
      </div>
      <div style={rightHeader}>
        <div>Search</div>
        <div>Tweet</div>
      </div>
    </div>
  );
}

export default Header;
