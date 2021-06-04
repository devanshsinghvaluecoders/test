import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // const [val, setval] = useState([]);
  // const [pages, setpages] = useState(1);
  // const infiniteScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop >=
  //     document.documentElement.offsetHeight
  //   ) {
  //     setpages(pages + 1);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", infiniteScroll);
  // }, [document.documentElement.scrollTop]);

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     .then((res) => res.json())
  //     .then((data) => setval([...val, ...data]));
  // }, [pages]);
  return (
    <div className="App">
      {/* {val?.map((res) => (
        <div>{res.title}</div>
      ))} */}
    </div>
  );
}

export default App;
