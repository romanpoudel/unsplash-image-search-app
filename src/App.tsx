import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import { useState, useEffect } from "react";
import SearchContext from "./context/MyContext";
import PaginationContext from "./context/PageContext";
import Saved from "./components/Saved";

function App() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);


  useEffect(()=>{
    const storedArrayJSON = localStorage.getItem("images");
    if (storedArrayJSON !== null) {
      const storedArray = JSON.parse(storedArrayJSON);
      const arrayLength = storedArray.length;
      console.log(arrayLength);
      setCount(arrayLength);
    }
  },[])

  useEffect(() => {
    setShow(true);
    setInterval(() => {
      setShow(false);
    }, 2500);
  }, [count]);
  return (
    <div className="mx-auto w-[95%]">
      {/* <MyContext.Provider value={{ text, setText }}> */}
      <SearchContext>
        {/* search */}
        <Search />
        <PaginationContext>
          {/* image components */}
          <Home />
          {/* pagination */}
          <Pagination />
        </PaginationContext>
        {/* </MyContext.Provider> */}
      </SearchContext>
      <div className="absolute  bottom-4">{show &&<Saved />}</div>
    </div>
  );
}

export default App;
