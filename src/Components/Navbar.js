import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="d-flex justify-content-between m-4">
        <h1
          style={{
            fontFamily: "MontserratAlt1-ExtraBold",
          }}
        >
          WISHD<i className="fa-solid fa-lightbulb"></i>M WONDERING
        </h1>
        <div className="mx-5">
          <i class="fa-solid fa-sun fa-2xl"></i>
          <i className="fa-solid fa-moon fa-2xl"></i>
        </div>
      </div>
    </div>
  );
}
