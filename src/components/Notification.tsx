const Notification = () => {
  return (
    <div className="w-40 rounded-lg bg-white py-4 pl-4 font-bold  text-indigo-600">
      <ul className="list-inside list-image-[url(check.svg)]">
        <li> Image Saved.</li>
      </ul>
      {/* time bar */}
      <div className="relative h-1 w-32 rounded-full bg-gray-300 pr-2">
        <div className="animate-decreasing-line h-full rounded-full bg-indigo-600"></div>
      </div>
    </div>
  );
};

export default Notification;
