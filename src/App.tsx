import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
// import { useState } from "react";
import SearchContext from "./context/MyContext";

function App() {
  // const [text, setText] = useState("");
  return (
    <div className="mx-auto w-[95%]">
      {/* <MyContext.Provider value={{ text, setText }}> */}
      <SearchContext>
        {/* search */}
        <Search />
        {/* image components */}
        <Home />
        {/* pagination */}
        <Pagination />
      {/* </MyContext.Provider> */}
      </SearchContext>
    </div>
  );
}

export default App;
