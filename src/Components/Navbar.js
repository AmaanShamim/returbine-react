import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <div className="d-flex justify-content-between m-4" style={{
        alignItems: "center"
      }}>
        <h1
          style={{
            fontFamily: "MontserratAlt1-ExtraBold",
          }}
        >
          WISHD<i className="fa-solid fa-lightbulb"></i>M WONDERING
        </h1>
        <div className="mx-2">
          {props.mode==='dark' && <i style={{
            cursor: 'pointer'
          }} onClick={props.toggleMode} className="fa-solid fa-sun fa-2xl"></i>}
          {props.mode==='light' && <i style={{
            cursor: 'pointer'
          }} onClick={props.toggleMode} className="fa-solid fa-moon fa-2xl"></i>}
        </div>
      </div>
    </div>
  );
}
