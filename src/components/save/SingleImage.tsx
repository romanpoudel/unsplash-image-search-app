import { MyContext } from "../../context/MyContext";
import { Photo } from "../../type";
import { useContext } from "react";
// import {Dispatch,SetStateAction} from "react"

const SingleImage = ({ photo }: { photo: Photo }) => {
  const { setCount } = useContext(MyContext);
  const { urls, description, alt_description } = photo;
  const displayText = description || alt_description;
  console.log(displayText);
  const handleRemove = () => {
    const savedImagesJSON: any = window.localStorage.getItem("images");
    const savedImages: any = JSON.parse(savedImagesJSON) || [];
    const filteredArray = savedImages.filter(
      (savedPhoto: any) => savedPhoto.id !== photo.id,
    );
    window.localStorage.setItem("images", JSON.stringify(filteredArray));
    // change badge count
    setCount(filteredArray.length);
  };
  return (
    <div className="rounded-lg bg-white">
      <img
        src={urls.small}
        alt=""
        loading="lazy"
        className="h-3/4 w-full rounded-t-lg object-cover"
      />
      <div className="mx-2 flex h-1/4  items-center justify-center  py-4">
        <p className="my-2 line-clamp-1 h-4 w-3/4 overflow-hidden  px-1 text-xs font-semibold capitalize  text-gray-600 sm:line-clamp-2 sm:h-10  sm:text-sm lg:h-12 lg:text-base">
          {displayText}
        </p>
        <button
          type="button"
          className="w-24 rounded-full bg-indigo-600  py-1 text-white hover:bg-indigo-700 hover:shadow-lg "
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default SingleImage;
