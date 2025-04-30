import "./App.css";
import card from "./assets/card.png";
import html2canvas from "html2canvas";
import Header from "./components/header";
import Button from "@mui/material/Button";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const ref = useRef();
  const [idx, setIdx] = useState(0);
  const [userData, setUserData] = useState([]);
  const [currentData, setCurrentData] = useState(null);

  let shetId = "1_m1r4uqhlNMosyy5GQBg0XgqqKGCqfJWyydwnIARAxg";
  let shetTitle =
    "reportSubmissions_Wed Jan 11 2023 13:10:52 GMT+0100 (heure normale d'Europe centrale)";
  let shetCount = "A2:C100";

  let fullUrl =
    "https://docs.google.com/spreadsheets/d/" +
    shetId +
    "/gviz/tq?sheet=" +
    shetTitle +
    "&range=" +
    shetCount;

  useEffect(() => {
    fetch(fullUrl)
      .then((res) => res.text())
      .then((rep) => {
        let db = JSON.parse(rep.substr(47).slice(0, -2));
        setUserData(db.table.rows);
        setCurrentData(db.table.rows[0]);
      });
  }, []);

  const handleNext = () => {
    setIdx((prevTime) => prevTime + 1);
    setCurrentData(userData[idx + 1]);
  };

  const handleBack = () => {
    if (idx > 0) {
      setIdx((prevTime) => prevTime - 1);
      setCurrentData(userData[idx - 1]);
    }
  };

  const downloadImage = async (element) => {
    const canvas = await html2canvas(element, { useCORS: true, scale: 2 });
    const dataset = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = dataset;
      link.download = "image.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(dataset);
    }
  };

  const handleGenerator = async () => {
    setIdx((prevTime) => prevTime + 1);
    setCurrentData(userData[idx + 1]);
    await downloadImage(ref.current);
  };

  const handleScript = async () => {
    let id = idx;
    const interval = setInterval(async () => {
      id = id + 1;
      setIdx(id);
      setCurrentData(userData[id]);
      await downloadImage(ref.current);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  };

  return (
    <div>
      {!!userData.length ? (
        <div className="App">
          <div className="card-box" ref={ref}>
            <img src={card} className="card" alt="Card template" />
            <img 
              src={currentData?.c?.[2]?.v} 
              className="user-img" 
              alt="User profile" 
              style={{border: '1px solid gainsboro'}} 
            />
            <p className="user-name">@{currentData?.c?.[0]?.v}</p>
          </div>
          <div className="butRow">
            <Button className="btn" variant="contained" onClick={handleBack}>
              Back
            </Button>
            <div>
              <Button
                className="button"
                variant="contained"
                onClick={handleGenerator}
              >
                Download
              </Button>
              <Button
                className="button"
                variant="contained"
                onClick={handleScript}
              >
                Print 10 Cards
              </Button>
            </div>
            <Button className="btn" variant="contained" onClick={handleNext}>
              Next
            </Button>
          </div>
        </div>
      ) : (
        <div className="App">
          <h1 className="notfound">No Data Found :(</h1>
        </div>
      )}
    </div>
  );
}

export default App;
