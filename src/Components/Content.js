import React from "react";

export default function Content(props) {
  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh"
      }}>
        <div id="quote-box">
          <div
            style={{
              color: "black",
              backgroundColor: "#ffffffcf",
              margin: "0px 40px",
              padding: "50px",
              borderRadius: "3px",
            }}
          >
            <h1
              style={{
                fontFamily: "Satisfy-Regular",
                textAlign: "center",
              }}
              id="text"
            >
              There are no traffic jams along the extra mile.
            </h1>
            <p
              style={{
                display: "flex",
                justifyContent: "end",
                fontFamily: "cursive",
              }}
              id="author"
            >
              - Author
            </p>
            <div
              className="d-flex justify-content-between"
              style={{
                paddingTop: "20px",
              }}
            >
              <a
                id="tweet-quote"
                href="twitter.com/intent/tweet"
                style={{
                  borderRadius: "3px",
                  backgroundColor: "black",
                  padding: "10px",
                }}
              >
                <i className="fa fa-twitter fa-2xl" style={{ color: "#fff" }}></i>
              </a>
              <button
                id="new-quote"
                style={{
                  fontFamily: "cursive",
                  border: "none",
                  borderRadius: "3px",
                  backgroundColor: "black",
                  color: "white",
                  padding: "0px 20px",
                }}
              >
                New quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div
        id="quote-box"
        style={{
          borderRadius: 3,
          position: "relative",
          width: 450,
          padding: "40px 50px",
          display: "table",
          backgroundColor: "#fff",
        }}
      >
        <div>
          <h5 id="text">
            Card title
          </h5>
          <p id="author">
            -- author
          </p>
          <button id="new-quote" href="/">
            Card link
          </button>
          <a style={{ color: "black" }} id="tweet-quote" href="/">
            <i className="fa-brands fa-square-twitter fa-2xl"></i>
          </a>
        </div>
      </div> */
}
