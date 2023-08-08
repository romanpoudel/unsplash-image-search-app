import Search from "./Search";

const HeroSection = () => {
  return (
    <div className="mx-auto h-96 w-full  rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white mt-2">
      <h2 className="w-full pt-28 text-center text-2xl font-bold">
        Save High Quality Images by creators
      </h2>
      <p className="pt-4 text-center font-medium">
        Over 2.4 million+ stock Images by talented community
      </p>
      <div className="w-80 sm:w-96 mx-auto">
        <Search />
      </div>
    </div>
  );
};

export default HeroSection;
