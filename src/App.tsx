import React, { useEffect, useState } from "react";
import "./App.css";
import Item from "./components/Item";
import Loader from "./components/Loader";
import { apiUrl } from "./config/constnts";

function App() {
  const [item, setItem] = useState([]);
  const [error, setError] = useState({});

  interface Star {
    title: string;
    id: number;
    date: number;
    explanation: string;
    hdurl: string;
    copyright: string;
    url: string;
  }

  const handleDelete = (index: number) => {
    const newItems = [...item];
    newItems.splice(index, 1);
    setItem(newItems);
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((res) => setItem(res))
      .catch((err) => setError(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {item.length > 0 ? (
          item.map((item: Star, index: number) => (
            <Item item={item} index={index} handleDelete={handleDelete} />
          ))
        ) : (
          <Loader />
        )}
      </header>
    </div>
  );
}

export default App;
