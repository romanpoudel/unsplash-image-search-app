const Saved = () => {
  return (
    <div className="w-40 rounded-lg bg-white py-4 pl-4 font-bold  text-blue-500">
      <ul className="list-inside list-image-[url(check.svg)]">
        <li> Image Saved.</li>
      </ul>
      {/* time bar */}
      <div className="relative h-1 w-32 bg-gray-300 pr-2">
        <div className="animate-decreasing-line h-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Saved;
