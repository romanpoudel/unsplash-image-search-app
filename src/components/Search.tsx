import { LiaSearchSolid } from "react-icons/lia";
import { MyContext } from "../context/MyContext";
import { useContext, useState, useEffect } from "react";
import { useDebounce } from "usehooks-ts";

const Search = () => {
  const { setText } = useContext(MyContext);
  const [input, setInput] = useState("");

  //using debounce to limit api hit
  const debouncedValue = useDebounce(input, 500);
  useEffect(() => {
    setText(debouncedValue);
  }, [debouncedValue]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <div className="relative  my-6 flex  flex-row items-center rounded-lg flex-grow">
      <div className="pointer-events-none absolute flex h-full items-center rounded-l-lg bg-indigo-700 px-4">
        <LiaSearchSolid color="white" size={30} />
      </div>
      <div className="w-full rounded-lg bg-gradient-to-r from-indigo-600 to-purple-400">
        <input
          type="text"
          // title="search"
          value={input}
          onChange={handleChange}
          placeholder="Search high-resolution images"
          className=" w-full rounded-lg bg-inherit p-2 pl-20 text-xl font-normal text-gray-100 outline-none placeholder:text-base placeholder:text-gray-300 sm:placeholder:text-xl"
        />
      
      </div>
    </div>
  );
};

export default Search;
