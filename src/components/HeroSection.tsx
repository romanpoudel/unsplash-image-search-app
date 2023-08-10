import Search from "./Search";

const HeroSection = () => {
  return (
    <div className="mx-auto mt-2 h-96  w-full rounded-lg bg-[url(/images/hero.jpg)] bg-cover  bg-center bg-no-repeat text-white">
      <h2 className="w-full pt-28 text-center text-2xl font-bold">
        Save High Quality Images by creators
      </h2>
      <p className="pt-4 text-center font-medium">
        Over 2.4 million+ stock Images by talented community
      </p>
      <div className="mx-auto w-80 sm:w-96">
        <Search />
      </div>
    </div>
  );
};

export default HeroSection;
