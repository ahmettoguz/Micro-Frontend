import axios from "axios";
import frontendImage from "../assets/image.png";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const makeRequest = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = async () => {
    const tempData = await makeRequest();
    setData(tempData);
  };

  return (
    <>
      <h1>Micro frontend App</h1>
      <button onClick={handleClick}>Send Request To backend</button>
      <br />
      {data && <p>{data.title}</p>}
      <br />
      <img src={frontendImage} alt="" style={{ height: "50px" }} />
    </>
  );
}

export default App;
