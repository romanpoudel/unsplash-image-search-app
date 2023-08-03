import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  return (
    <div className="mx-auto w-[95%]">
      {/* different components */}
      {/* search */}
      <div>
        <Search />
      </div>
      {/* sidebar */}
      {/* image components */}
      <div><Home /></div>
      {/* pagination */}
    </div>
  );
}

export default App;
