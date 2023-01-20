import axios from "axios";
import { useState, useEffect } from "react";
import { MeaningsIndex } from "./MeaningsIndex";
export function Home() {
  const [meanings, setMeanings] = useState([]);
  const handleIndexMeanings = () => {
    console.log("handleIndexMeanings");
    axios.get("http://localhost:3000/meanings.json").then((response) => {
      console.log(response.data);
      setMeanings(response.data);
    });
  };
  useEffect(handleIndexMeanings, []);

  return (
    <div>
      <MeaningsIndex meanings={meanings} />
    </div>
  );
}
