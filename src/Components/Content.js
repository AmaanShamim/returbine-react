import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Content(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const randomIndex = Math.floor(Math.random() * 1643);

  return (
    <>
      {data ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "75vh",
          }}
        >
          <div id="quote-box">
            <div
              style={{
                width: "350px",
                color: "black",
                backgroundColor: "#ffffffcf",
                margin: "0px 40px",
                padding: "50px",
                borderRadius: "3px",
              }}
            >
              <>
                <h1
                  id="text"
                  style={{
                    fontSize: "25px",
                    fontFamily: "Satisfy-Regular",
                    textAlign: "center",
                  }}
                >
                  {data[randomIndex].text}
                </h1>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    fontSize: "12px",
                    fontFamily: "cursive",
                  }}
                  id="author"
                >
                  -{" "}
                  {data[randomIndex].author
                    ? data[randomIndex].author
                    : "Unknown"}
                </p>
              </>
              <div
                className="d-flex justify-content-between"
                style={{
                  paddingTop: "20px",
                }}
              >
                <a
                  id="tweet-quote"
                  href={'https://twitter.com/intent/tweet?text=' + data[randomIndex].text + '" ' + data[randomIndex].author}
                  target="_black"
                  style={{
                    borderRadius: "3px",
                    backgroundColor: "black",
                    padding: "10px",
                  }}
                >
                  <i
                    className="fa fa-twitter fa-2xl"
                    style={{ color: "#fff" }}
                  ></i>
                </a>
                <button
                  onClick={props.changeQuote}
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
          <p style={{
            paddingTop: "20px",
            fontFamily: 'Satisfy-Regular'
          }}>- by Amaan Shamim Khan</p>
        </div>
      ) : (
        <div style={{
          display: "flex",
          justifyContent: "center",
          height: "70vh",
          alignItems: "center"      
        }}>
          <div 
            class="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}
