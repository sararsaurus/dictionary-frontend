import axios from "axios";
import { useState, useEffect } from "react";
import { MeaningsIndex } from "./MeaningsIndex";
import { MeaningsNew } from "./MeaningsNew";

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

  const handleCreateMeaning = (params, successCallback) => {
    console.log("handleCreateMeaning", params);
    axios.post("http://localhost:3000/meanings.json", params).then((response) => {
      setMeanings([...meanings, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <MeaningsNew onCreateMeaning={handleCreateMeaning} />
      <MeaningsIndex meanings={meanings} />
    </div>
  );
}
