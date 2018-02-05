import React from "react";

function Header(){
  let mainHeader = {
    fontFamily: 'sans-serif',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: 'solid 2px grey'
  }

  let nav = {
    padding: '10px',
    border: 'solid 1px grey'
  }

  let search = {
    border: 'solid 1px blue',
    padding: '10px',
    margin: '10px',
    width: '300px'
  }

  return (
    <div style={mainHeader}>
      <div style={{display: 'flex'}}>
        <div style={nav}>Home</div>
        <div style={nav}>Notifications</div>
        <div style={nav}>Messages</div>
      </div>
      <div style={{display: 'flex'}}>
        <div style={search}>Search</div>
        <div style={search}>Tweet</div>
      </div>
    </div>
  );
}

export default Header;
