import { Photo } from "../../type";
import SingleImage from "./SingleImage";
import { GrFormPreviousLink } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const SavedImages = () => {
  const savedImagesJSON: any = window.localStorage.getItem("images");
  const savedImages: any = JSON.parse(savedImagesJSON) || [];
  console.log(savedImages);
  //to rerender when we remove saved image
  const [_change, setChange] = useState([]);
  useEffect(() => {
    setChange(savedImages);
  }, [savedImages]);
  return (
    <div className="mx-auto w-[95%]">
      <div className="sticky top-0 mb-4 flex items-center justify-center  bg-gray-100 py-3 text-center text-3xl font-bold text-indigo-600 shadow-lg ">
        <div className="absolute left-4 ">
          <Link to="/">
            <GrFormPreviousLink size={30} />
          </Link>
        </div>
        <p>Saved Images</p>
      </div>
      <div className=" mb-8 grid  grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {savedImages.map((image: Photo) => (
          <SingleImage photo={image} key={image.id} />
        ))}
      </div>
    </div>
  );
};

export default SavedImages;
