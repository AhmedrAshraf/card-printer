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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const shetId = "1_m1r4uqhlNMosyy5GQBg0XgqqKGCqfJWyydwnIARAxg";
  const shetTitle =
    "reportSubmissions_Wed Jan 11 2023 13:10:52 GMT+0100 (heure normale d'Europe centrale)";
  const shetCount = "A2:C100";

  const fullUrl =
    "https://docs.google.com/spreadsheets/d/" +
    shetId +
    "/gviz/tq?sheet=" +
    shetTitle +
    "&range=" +
    shetCount;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(fullUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const text = await response.text();
        const db = JSON.parse(text.substr(47).slice(0, -2));
        setUserData(db.table.rows);
        setCurrentData(db.table.rows[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fullUrl]);

  const handleNext = () => {
    if (idx < userData.length - 1) {
      setIdx((prevIdx) => prevIdx + 1);
      setCurrentData(userData[idx + 1]);
    }
  };

  const handleBack = () => {
    if (idx > 0) {
      setIdx((prevIdx) => prevIdx - 1);
      setCurrentData(userData[idx - 1]);
    }
  };

  const downloadImage = async (element) => {
    try {
      const canvas = await html2canvas(element, { 
        useCORS: true, 
        scale: 2,
        logging: false 
      });
      const dataset = canvas.toDataURL("image/png");
      const link = document.createElement("a");

      if (typeof link.download === "string") {
        link.href = dataset;
        link.download = `card_${currentData?.c?.[0]?.v || 'user'}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(dataset);
      }
    } catch (err) {
      setError('Failed to generate image');
    }
  };

  const handleGenerator = async () => {
    if (idx < userData.length - 1) {
      setIdx((prevIdx) => prevIdx + 1);
      setCurrentData(userData[idx + 1]);
      await downloadImage(ref.current);
    }
  };

  const handleScript = async () => {
    let id = idx;
    const interval = setInterval(async () => {
      if (id < userData.length - 1) {
        id = id + 1;
        setIdx(id);
        setCurrentData(userData[id]);
        await downloadImage(ref.current);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
    }, 10000);
  };

  if (isLoading) {
    return (
      <div className="App">
        <h1 className="notfound">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <h1 className="notfound">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      {userData.length > 0 ? (
        <div className="App">
          <div className="card-box" ref={ref}>
            <img src={card} className="card" alt="Card template" />
            <img 
              src={currentData?.c?.[2]?.v} 
              className="user-img" 
              alt={`Profile of ${currentData?.c?.[0]?.v || 'user'}`} 
              style={{border: '1px solid gainsboro'}} 
            />
            <p className="user-name">@{currentData?.c?.[0]?.v}</p>
          </div>
          <div className="butRow">
            <Button 
              className="btn" 
              variant="contained" 
              onClick={handleBack}
              disabled={idx === 0}
            >
              Back
            </Button>
            <div>
              <Button
                className="button"
                variant="contained"
                onClick={handleGenerator}
                disabled={idx >= userData.length - 1}
              >
                Download
              </Button>
              <Button
                className="button"
                variant="contained"
                onClick={handleScript}
                disabled={idx >= userData.length - 1}
              >
                Print 10 Cards
              </Button>
            </div>
            <Button 
              className="btn" 
              variant="contained" 
              onClick={handleNext}
              disabled={idx >= userData.length - 1}
            >
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
