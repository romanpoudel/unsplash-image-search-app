import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import { useEffect, useContext } from "react";
// import SearchContext from "./context/MyContext";
// import PaginationContext from "./context/PageContext";
import Notification from "./components/Notification";
import { MyContext } from "./context/MyContext";
import { BsSave } from "react-icons/bs";
import { Badge, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  const { show, setShow,count } = useContext(MyContext);

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
    console.log(show);
  }, [show]);
  return (
    <div className="mx-auto w-[95%]">
      {/* <MyContext.Provider value={{ text, setText }}> */}
      {/* <SearchContext> */}
      {/* search */}
      <div className="flex items-center">
        <div className="flex flex-grow">
          <Search />
        </div>
        <Link to="/saved-images">
        <Badge badgeContent={count} color="secondary" style={{zIndex:0}}>
          <Tooltip title="Saved Images" placement="bottom" arrow>
            <div className="ml-4 cursor-pointer text-purple-500">
              <BsSave size={38} />
            </div>
          </Tooltip>
          </Badge>
        </Link>
      </div>

      {/* <PaginationContext> */}
      {/* image components */}
      <Home />
      {/* pagination */}
      <Pagination />
      {/* </PaginationContext> */}
      {/* </MyContext.Provider> */}
      <div className="absolute  bottom-4">{show && <Notification />}</div>
      {/* </SearchContext> */}
    </div>
  );
}

export default App;
