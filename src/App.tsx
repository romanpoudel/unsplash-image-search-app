import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import { useState, useEffect,useContext } from "react";
// import SearchContext from "./context/MyContext";
// import PaginationContext from "./context/PageContext";
import Saved from "./components/Saved";
import { MyContext } from "./context/MyContext";

function App() {
  // const [show, setShow] = useState(false);
  // const [count, setCount] = useState(0);
  const {show,setShow}=useContext(MyContext);

  // useEffect(() => {
  //   const storedArrayJSON = localStorage.getItem("images");
  //   if (storedArrayJSON !== null) {
  //     const storedArray = JSON.parse(storedArrayJSON);
  //     const arrayLength = storedArray.length;
  //     console.log(arrayLength);
  //     setCount(arrayLength);
  //   }
  // }, []);

  useEffect(() => {
    // setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2500);
    console.log(show)
  }, [show]);
  return (
    <div className="mx-auto w-[95%]">
      {/* <MyContext.Provider value={{ text, setText }}> */}
      {/* <SearchContext> */}
        {/* search */}
        <Search />
        {/* <PaginationContext> */}
          {/* image components */}
          <Home />
          {/* pagination */}
          <Pagination />
        {/* </PaginationContext> */}
        {/* </MyContext.Provider> */}
        <div className="absolute  bottom-4">{show && <Saved />}</div>
      {/* </SearchContext> */}
    </div>
  );
}

export default App;
