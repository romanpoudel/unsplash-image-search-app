import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="mx-auto w-[95%]">
      {/* search */}
      <Search />
      {/* image components */}
      <Home />
      {/* pagination */}
      <Pagination />
    </div>
  );
}

export default App;
