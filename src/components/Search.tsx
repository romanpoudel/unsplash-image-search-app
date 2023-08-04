import { LiaSearchSolid } from "react-icons/lia";

const Search = () => {
  return (
    <div className="relative  my-6 flex  flex-row items-center rounded-lg bg-blue-500 ">
      <div className="pointer-events-none absolute flex h-full items-center rounded-l-lg bg-blue-500 px-4">
        <LiaSearchSolid color="white" size={30} />
      </div>
      <div className="w-full rounded-lg bg-gradient-to-r from-blue-400 to-blue-500">
        <input
          type="text"
          title="search"
          placeholder="Search high-resolution images"
          className=" w-full rounded-lg bg-inherit p-2 pl-20 text-xl font-normal text-gray-100 outline-none placeholder:text-xl placeholder:text-gray-300"
        />
      </div>
    </div>
  );
};

export default Search;
